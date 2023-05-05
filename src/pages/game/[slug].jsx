import { Info, Platforms, useGetGameQuery } from "entities/GameCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "react-query";
import { GamesRemoteService } from "shared/api";
import styled from "styled-components";
import { Layout } from "widgets/layout";
import { Text } from "shared/ui/text";
import { format } from "date-fns";
import { useToggle } from "shared/hooks";
import { CarouselWithSlider, Loader } from "shared/ui";

export const getStaticProps = async (context) => {
  const id = context.params?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["games"], () =>
    GamesRemoteService.getRemoteGameById(id),
  );

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
  const { data: game, isLoading } = useGetGameQuery(query.slug);

  const { toggle: toggleAbout, isShowing: isOpenAbout } = useToggle();

  const date = game && format(new Date(game.released), "MMM dd, y");

  const images = game && [
    {
      id: 0,
      link: game.background_image,
    },
    {
      id: 1,
      link: game.background_image_additional,
    },
  ];

  const genres = game?.genres.map(
    (genre, index, arr) =>
      `${genre.name}${index !== arr.length - 1 ? ", " : ""}`,
  );

  return (
    <Layout title={query.slug}>
      {isLoading && <Loader />}
      {game && (
        <Container>
          <Content>
            <Release>
              <ReleaseDate>{date}</ReleaseDate>
              <Platforms platforms={game.parent_platforms} />
            </Release>
            <AvgTime>{`AVERAGE PLAYTIME: ${game.playtime} HOURS`}</AvgTime>
            <Title title={game.name} size="L" />
            <CarouselWithSlider images={images} />
            <About
              title="About"
              text={game.description_raw}
              size="S"
              align="left"
              lineClamp={isOpenAbout ? undefined : 4}
            >
              <AboutButton onClick={toggleAbout}>
                {isOpenAbout ? "Hide" : "Show more"}
              </AboutButton>
            </About>
            <InfoContainer>
              <Info title="Rating" info={game.rating} />
              <Info title="Metacritic:" info={game.metacritic} />
              <Info title="Genres:" info={genres} />
              <Info title="Publihers:" info={game.publishers[0].name} />
            </InfoContainer>
            <WebLink href={game.website} passHref target="_blank">
              <Title title="Go to website" size="S" />
            </WebLink>
          </Content>
        </Container>
      )}
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 486px;

  @media (min-width: 1000px) {
    display: grid;
    max-width: 900px;
    grid-template-columns: 400px 1fr;
    column-gap: 30px;
  }

  @media (min-width: 1320px) {
    display: grid;
    max-width: 1200px;
    grid-template-columns: 500px 1fr;
    column-gap: 30px;
  }
`;

const Release = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  grid-column: 1/3;
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
  grid-column: 1/3;
`;

const Title = styled(Text)`
  margin-bottom: 20px;
  grid-column: 1/2;
`;

const About = styled(Text)`
  margin-bottom: 20px;
  position: relative;

  @media (min-width: 1000px) {
    -webkit-line-clamp: none;
    overflow: visible;
    display: block;
    & button {
      display: none;
    }
  }
`;

const AboutButton = styled.button`
  position: absolute;
  right: 0;
  bottom: -5px;
  padding: 3px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const WebLink = styled(Link)`
  grid-column: 1/2;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export default GamePage;
