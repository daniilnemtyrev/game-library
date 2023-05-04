import { useInfiniteQuery } from "react-query";
import { GamesLocalService } from "shared/api";

export const useGamesInfiniteQuery = ({
  search,
  ordering,
  parent_platforms,
  ...params
}) => useInfiniteQuery({
  queryKey: ["games", { search, ordering, parent_platforms }],
  queryFn: async ({ pageParam }) => {
    const page = pageParam ?? 1;

    const data = await GamesLocalService.getGamesLocal({
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
