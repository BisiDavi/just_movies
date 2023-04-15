import mailjet from "node-mailjet";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const reqBody = JSON.parse(req.body);
  const { email, movie } = reqBody;

  switch (req.method) {
    case "POST":
      try {
        console.log("movie", movie);
        return mailjet
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
                  Name: "oludavidconnect@gmail.com",
                },
                To: [
                  {
                    Email: email,
                    Name: email,
                  },
                ],
                // TemplateID: `${process.env.MAILJET_TEMPLATE_ID}`,
                // TemplateLanguage: true,
                Subject: `Details about`,
                // Variables: { ...movie },
                TextPart: "Hello David",
                TemplateErrorReporting: {
                  Email: "oludavidconnect@gmail.com",
                  name: "Olubisi David",
                },
              },
            ],
          })
          .then((resp) => {
            console.log("resp", resp);
            return res.status(200).send("message sent");
          });
      } catch (error: any) {
        console.log("error again,olubisi", error);
        return res.status(error.code).send("message error");
      }
  }
}
