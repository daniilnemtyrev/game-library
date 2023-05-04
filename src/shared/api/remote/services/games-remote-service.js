import { axiosRemote } from "shared/api/axios";
import { ApiRoutes } from "shared/api/routes";

export class GamesRemoteService {
  static async axios(props) {
    return axiosRemote.request(props);
  }

  static async getRemoteGames(params) {
    const { data } = await this.axios({
      url: ApiRoutes.GAMES,
      params: {
        key: process.env.API_KEY,
        ...params,
      },
    });

    return data;
  }

  static async getRemoteGameById(slug) {
    const { data } = await this.axios({
      url: `${ApiRoutes.GAMES}/${slug}`,
      params: {
        key: process.env.API_KEY,
      },
    });

    return data;
  }
}
