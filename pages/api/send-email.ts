import mailjet from "node-mailjet";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, movie } = req.body;

  switch (req.method) {
    case "POST":
      try {
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
                  Name: "MailMovies",
                },
                To: [
                  {
                    Email: email,
                    Name: email,
                  },
                ],
                TemplateID: 4736077,
                TemplateLanguage: true,
                Subject: `Details about ${movie.Title}`,
                Variables: { ...movie },
              },
            ],
          })
          .then(() => {
            return res.status(200).send("message sent");
          });
      } catch (error: any) {
        return res.status(error.code).send("message error");
      }
  }
}
