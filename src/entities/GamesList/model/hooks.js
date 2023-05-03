import { useInfiniteQuery } from "react-query";
import { GamesService } from "shared/api/services/games-service";

export const useGamesInfiniteQuery = ({
  search,
  ordering,
  parent_platforms,
  ...params
}) =>
  useInfiniteQuery({
    queryKey: ["games", { search, ordering, parent_platforms }],
    queryFn: async ({ pageParam }) => {
      const page = pageParam ?? 1;

      const data = await GamesService.getGames({
        search,
        ordering,
        parent_platforms,
        page,
        page_size: 40,
        ...params,
      });

      return data;
    },
    staleTime: 1800 * 1000,
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
  });
