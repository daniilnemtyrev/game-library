import { GameCard } from "entities/GameCard";
import {
  searchSelector,
  orderFilterSelector,
  platformFilterSelector,
} from "features/filters";
import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { useIntersectionObserver } from "shared/hooks";
import { Loader } from "shared/ui";
import styled from "styled-components";
import { useGamesInfiniteQuery } from "../model/hooks";

export const GamesList = () => {
  const search = useSelector(searchSelector);
  const orderFilter = useSelector(orderFilterSelector);
  const { direction, order } = orderFilter;
  const { id } = useSelector(platformFilterSelector);

  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useGamesInfiniteQuery({
      search,
      ordering: direction && order.name ? `-${order.name}` : order.name,
      parent_platforms: id,
    });
  const intersectionDiv = useRef(null);
  const handleIntersection = useCallback(() => {
    if (!isError && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isError, isFetchingNextPage]);

  useIntersectionObserver(
    intersectionDiv,
    { threshold: 0.01 },
    handleIntersection,
  );

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        {data?.pages?.map((games) =>
          games?.results?.map((game) => <GameCard key={game.id} game={game} />),
        )}
      </Container>
      <IntersectionDiv ref={intersectionDiv} />
      {isFetchingNextPage && <Loader />}
    </>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1920px;

  @media (min-width: 678px) {
    display: grid;
    grid-template-columns: repeat(2, 300px);
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 300px);
  }

  @media (min-width: 1320px) {
    display: grid;
    grid-template-columns: repeat(4, 300px);
  }

  @media (min-width: 1650px) {
    display: grid;
    grid-template-columns: repeat(5, 300px);
  }
`;

const IntersectionDiv = styled.div`
  height: 1px;
`;
