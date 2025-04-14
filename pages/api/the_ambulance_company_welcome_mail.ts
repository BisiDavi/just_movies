import google from "googleapis";
import mailjet from "node-mailjet";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type FormDetailsType = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	requirements: string;
	message: string;
};

// Load the service account key
const auth = new google.auth.GoogleAuth({
	credentials: {
		private_key: process.env.SPREADSHEET_PRIVATE_KEY?.replace(/\\n/g, "\n"),
		client_email: process.env.GOOGLE_CLIENT_EMAIL,
	},
	scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function appendToSheet(formDetails: FormDetailsType) {
	try {
		const client = await auth?.getClient();
		const sheets = google.sheets({ version: "v4", auth: client });

		const spreadsheetId = `${process.env.SPREADSHEET_ID}`;
		const range = "Sheet1!A:G"; // Adjust range

		const timestamp = new Date().toISOString();
		const values = [
			[
				timestamp,
				formDetails.firstName,
				formDetails.lastName,
				formDetails.email,
				formDetails.phone,
				formDetails.requirements,
				formDetails.message,
			],
		];

		const resource = {
			values,
		};

		const result = await sheets.spreadsheets.values.append({
			spreadsheetId,
			range,
			valueInputOption: "RAW",
			resource,
		});

		console.log(`${result.data.updates.updatedCells} cells updated.`);
	} catch (error) {
		console.error(`Unable to save details to spreadsheet due to : ${error}`);
	}
}

const corsHeader = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	res.setHeader("Access-Control-Allow-Credentials", true as any);
	res.setHeader("Access-Control-Allow-Origin", "*"); // Replace * with your domain for production
	res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
	);

	// Handle OPTIONS request (preflight)
	if (req.method === "OPTIONS") {
		return res.status(200).end();
	}

	const { email } = req.body;
	const InquiryformDetails = req.body as FormDetailsType;

	try {
		await appendToSheet(InquiryformDetails);
		return mailjet
			.apiConnect(`${process.env.MAILJET_API_KEY}`, `${process.env.MAILJET_SECRET_KEY}`)
			.post("send", { version: "v3.1" })
			.request({
				Messages: [
					{
						From: {
							Email: "info@theambulancecompany.com",
							Name: "TheAmbulanceCompany",
						},
						To: [
							{
								Email: email,
								Name: email,
							},
						],
						TemplateID: 6898595,
						TemplateLanguage: true,
						Subject: "Thanks for reaching out",
						Variables: { firstName: req.body.firstName, lastName: req.body.lastName },
					},
				],
			})
			.then(() => NextResponse.json({ success: true, message: "message sent" }, { headers: corsHeader }));
	} catch (error: any) {
		return res.status(error.code).send("message error");
	}
}
