import axios from "axios";
import Cors from "cors";

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
  const { data } = await axios.get(
    `https://api.rawg.io/api/games?token&key=${process.env.API_KEY}`,
    {
      params: req.query,
    }
  );
  res.json(data);
}
