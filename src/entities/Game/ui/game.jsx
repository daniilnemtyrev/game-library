import styled from "styled-components";
import { format } from "date-fns";
import { Platforms } from "entities/GameCard";
import { Loader } from "shared/ui";
import { Text } from "shared/ui/text";
import { useToggle } from "shared/hooks";
import Link from "next/link";
import { useGetGameQuery } from "../model/hooks";

export const Game = ({ id }) => {
  const { data: game, isLoading } = useGetGameQuery(id);
  const { toggle: toggleAbout, isShowing: isOpenAbout } = useToggle();

  const date = game && format(new Date(game.released), "MMM dd, y");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Release>
        <ReleaseDate>{date}</ReleaseDate>
        <Platforms platforms={game?.parent_platforms} />
      </Release>
      <AvgTime>{`AVERAGE PLAYTIME: ${game?.playtime} HOURS`}</AvgTime>
      <WebLink href={game.website} passHref target="_blank">
        <Title title={game?.name} size="L" />
      </WebLink>

      <About
        title="About"
        text={game?.description_raw}
        size="S"
        align="left"
        lineClamp={isOpenAbout ? undefined : 4}
      >
        <AboutButton onClick={toggleAbout}>
          {isOpenAbout ? "Hide" : "Show more"}
        </AboutButton>
      </About>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Release = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const ReleaseDate = styled.span`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const AvgTime = styled.span`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

const About = styled(Text)`
  margin-bottom: 20px;
  position: relative;
`;

const AboutButton = styled.button`
  position: absolute;
  right: 0;
  bottom: -5px;
  padding: 3px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const WebLink = styled(Link)`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
