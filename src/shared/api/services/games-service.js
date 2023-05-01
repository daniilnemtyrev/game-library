import { axiosBase } from "../axios";
import { ApiRoutes } from "./routes";

export class GamesService {
  static async fetch(props) {
    return axiosBase.request(props);
  }

  static async getGames(params) {
    const { data } = await this.fetch({
      url: ApiRoutes.GAMES,
      params,
    });

    return data;
  }
}
