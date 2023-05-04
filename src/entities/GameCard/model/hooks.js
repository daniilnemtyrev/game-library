import { useQuery } from "react-query";
import { GamesLocalService } from "shared/api";

export const useGetGameQuery = (slug, options) =>
  useQuery(
    ["games/byId", slug],
    () => GamesLocalService.getGameById(slug),
    options,
  );
