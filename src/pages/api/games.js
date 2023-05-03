import axios from "axios";
import Cors from "cors";
import { GamesRemoteService } from "shared/api";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const data = await GamesRemoteService.getRemoteGames(req.query);

  res.json(data);
}
