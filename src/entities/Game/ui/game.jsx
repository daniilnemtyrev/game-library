import { useGetGameQuery } from "../model/hooks";

export const Game = ({ id }) => {
  const { data, isLoading, isError } = useGetGameQuery(id);

  console.log(data);

  return <div>{id}</div>;
};
