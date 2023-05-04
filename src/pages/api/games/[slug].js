import { GamesRemoteService } from "shared/api";
import { cors, runMiddleware } from "shared/utils/cors";

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const data = await GamesRemoteService.getRemoteGameById(req.query.slug);

  res.json(data);
}
