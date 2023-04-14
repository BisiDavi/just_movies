import mailjet from "node-mailjet";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, data } = req.body;
  switch (req.method) {
    case "POST": {
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
              TemplateID: "",
              TemplateLanguage: true,
              Subject: "",
              Variables: data,
              TemplateErrorReporting: {
                Email: "oludavidconnect@gmail.com",
                name: "Olubisi David",
              },
            },
          ],
        });
      res.status(200).json({ name: "John Doe" });
    }
  }
}
