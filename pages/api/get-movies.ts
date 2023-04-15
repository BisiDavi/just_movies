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
            `https://www.omdbapi.com/?apikey=${process.env.MOVIE_API}&s=${req.body.search}`
          )
          .then((resp) => {
            res.status(200).json(resp.data);
          });
      } catch (error) {
        res.status(400).json({ error });
      }
    }
  }
}
