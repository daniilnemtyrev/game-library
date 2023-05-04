import { Game } from "entities/Game";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "react-query";
import { GamesRemoteService } from "shared/api";
import { Layout } from "widgets/layout";

export const getStaticProps = async (context) => {
  const id = context.params?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["games"], () => GamesRemoteService.getRemoteGameById(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

const GamePage = () => {
  const { query } = useRouter();

  return <Layout title={query.id}>{query && <Game id={query.id} />}</Layout>;
};

export default GamePage;
