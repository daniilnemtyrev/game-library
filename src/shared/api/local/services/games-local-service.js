import { axiosLocal } from "shared/api/axios";
import { ApiRoutes } from "../../routes";

export class GamesLocalService {
  static async axios(props) {
    return axiosLocal.request(props);
  }

  static async getGamesLocal(params) {
    const { data } = await this.axios({
      url: ApiRoutes.GAMES,
      params,
    });

    return data;
  }

  static async getGameById(slug) {
    const { data } = await this.axios({
      url: `${ApiRoutes.GAMES}/${slug}`,
    });

    return data;
  }
}
