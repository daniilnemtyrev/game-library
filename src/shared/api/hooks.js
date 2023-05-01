import { useQuery } from "react-query";
import { GamesService } from "./services/games-service";

export const useGetEventQuery = ({ search }) =>
  useQuery(["games", search], () => GamesService.getGames({ search }), {
    staleTime: 1800 * 1000,
  });
