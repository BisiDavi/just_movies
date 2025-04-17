import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import mailjet from "node-mailjet";
import type { NextApiRequest, NextApiResponse } from "next";

type FormDetailsType = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	requirements: string;
	message: string;
};

async function appendToSheet(formDetails: FormDetailsType) {
	try {
		const serviceAccountAuth = new JWT({
			email: process.env.GOOGLE_CLIENT_EMAIL,
			key: process.env.SPREADSHEET_PRIVATE_KEY?.replace(/\\n/g, "\n"),
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		});

		const doc = new GoogleSpreadsheet("1X2yJDfzS3SACvitEd5Kg6twUR6Qs13HstDAixmLqJK4", serviceAccountAuth);

		await doc.loadInfo();

		const sheet = doc.sheetsByIndex[0];

		const timestamp = new Date().toISOString();

		const result = await sheet.addRow({
			Date: timestamp,
			FirstName: formDetails.firstName,
			LastName: formDetails.lastName,
			Email: formDetails.email,
			Phone: formDetails.phone,
			Requirements: formDetails.requirements,
			Message: formDetails.message,
		});
		result.save();
	} catch (error) {
		console.error(`Unable to save details to spreadsheet due to : ${error}`);
	}
}

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

	const InquiryformDetails = req.body as FormDetailsType;
	const { email } = InquiryformDetails;

	try {
		await appendToSheet(InquiryformDetails);
		await mailjet
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
						Variables: { firstName: InquiryformDetails.firstName, lastName: InquiryformDetails.lastName },
					},
				],
			});
		await mailjet
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
								Email: "info@theambulancecompany.com",
								Name: "Admin",
							},
						],
						TemplateID: 6912023,
						TemplateLanguage: true,
						Subject: "New Request",
						Variables: { email: InquiryformDetails.email },
					},
				],
			});
		return res.status(200).json({ status: true, message: "message sent" });
	} catch (error: any) {
		return res.status(error.code).send("message error");
	}
}
