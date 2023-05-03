import styled from "styled-components";
import { Layout } from "widgets/layout";
import { Text } from "shared/ui";
import { GamesService } from "shared/api/services/games-service";
import { QueryClient, dehydrate } from "react-query";
import { GamesList } from "entities/GamesList";
import { OrderFilters, PlatformsFilters } from "features/filters";

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
      <Wrapper>
        <Text
          title="New and trending"
          size="XL"
          text="Based on player counts and release date"
          align="left"
        />
        <Filters>
          <OrderFilters />
          <PlatformsFilters />
        </Filters>

        <GamesList />
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Filters = styled.div`
  display: flex;
  gap: 20px;
`;
