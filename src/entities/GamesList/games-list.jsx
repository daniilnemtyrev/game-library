import { GameCard } from "entities/GameCard";
import { searchSelector } from "features/filters";
import { useSelector } from "react-redux";
import { useGetEventQuery } from "shared/api/hooks";
import { Loader } from "shared/ui";
import styled from "styled-components";

export const GamesList = () => {
  const search = useSelector(searchSelector);
  const { data: games, isLoading } = useGetEventQuery({ search });

  return (
    <Container>
      {isLoading && <Loader />}
      {games?.results?.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
  width: 100%;
  max-width: 1920px;

  @media (min-width: 630px) {
    display: grid;

    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (min-width: 900px) {
    display: grid;

    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }

  @media (min-width: 1300px) {
    display: grid;

    grid-template-columns: repeat(4, minmax(300px, 1fr));
  }

  @media (min-width: 1500px) {
    display: grid;

    grid-template-columns: repeat(5, minmax(300px, 1fr));
  }
`;
