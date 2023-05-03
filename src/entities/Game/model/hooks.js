import { useQuery } from "react-query";
import { GamesLocalService } from "shared/api";

export const useGetGameQuery = (id, options) =>
  useQuery(
    ["games/byId", id],
    () => GamesLocalService.getGameById(id),
    options
  );
