import { searchSelector } from "features/filters";
import { useSelector } from "react-redux";
import { useGetEventQuery } from "shared/api/hooks";
import styled from "styled-components";

export const GamesList = () => {
  const search = useSelector(searchSelector);
  const { data: games, isLoading } = useGetEventQuery({ search });
  console.log(games);

  if (isLoading) {
    return <h1>isLoading...</h1>;
  }

  return (
    <Container>
      {games?.results?.map((game) => (
        <h3>{game.name}</h3>
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;
