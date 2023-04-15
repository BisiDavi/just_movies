import mailjet from "node-mailjet";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, data } = req.body;
  switch (req.method) {
    case "POST": {
      try {
        mailjet
          .apiConnect(
            `${process.env.MAILJET_API_KEY}`,
            `${process.env.MAILJET_SECRET_KEY}`
          )
          .post("send", { version: "v3.1" })
          .request({
            Messages: [
              {
                From: {
                  Email: "oludavidconnect@gmail.com",
                  Name: "MailMovies",
                },
                To: [
                  {
                    Email: email,
                    Name: email,
                  },
                ],
                TemplateID: process.env.MAILJET_TEMPLATE_ID,
                TemplateLanguage: true,
                Subject: `Details about ${data.Title}`,
                Variables: { ...data },
                TemplateErrorReporting: {
                  Email: "oludavidconnect@gmail.com",
                  name: "Olubisi David",
                },
              },
            ],
          })
          .then(() => {
            return res.status(200).send("message sent");
          });
      } catch (error) {
        console.log("error again,olubisi", error);
        return res.status(400).send("message error");
      }
    }
  }
}
