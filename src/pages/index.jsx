import styled from "styled-components";
import { Layout } from "widgets";
import { Text } from "shared/ui";
import { GamesService } from "shared/api/services/games-service";
import { QueryClient, dehydrate } from "react-query";
import { GamesList } from "entities/GamesList";

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["games"], () => GamesService.getGames());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  return (
    <Layout title="Home">
      <Main>
        <Text
          title="New and trending"
          text="Based on player counts and release date"
        />
        <GamesList />
      </Main>
    </Layout>
  );
}

const Main = styled.main``;
