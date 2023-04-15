import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST": {
      try {
        await axios
          .get(
            `https://www.omdbapi.com/?apikey=${process.env.MOVIE_API}&i=${req.body.id}`
          )
          .then((data) => {
            res.status(200).json(data.data);
          });
      } catch (error) {
        res.status(400).json({ error });
      }
    }
  }
}
