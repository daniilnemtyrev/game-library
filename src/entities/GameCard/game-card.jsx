import styled from "styled-components";
import Image from "next/image";
import { Text } from "shared/ui/text";
import { memo } from "react";
import { useToggle } from "shared/hooks";
import { format } from "date-fns";
import { Platforms } from "../Platforms";
import { MemoRatingButtons as RatingButtons } from "./ui/rating-buttons";
import { Info } from "./ui/info";

const GameCard = ({ game }) => {
  const { open, close, isShowing } = useToggle();

  const src = game.background_image ?? "/defaultGameCard.jpg";
  const date = format(new Date(game.released), "MMM dd, y");
  const year = date.split(",")[1];
  const genres = game.genres.map(
    (genre, index, arr) =>
      `${genre.name}${index !== arr.length - 1 ? ", " : ""}`
  );
  console.log(game);
  return (
    <Container>
      <StyledImage
        src={src}
        width={394}
        height={220}
        alt={`${game.name} image`}
      />
      <Content>
        <Platforms platforms={game.parent_platforms} />
        <Text title={game.name} size="S" align="left" />
        <RatingButtons rating={game.ratings_count} />
        {isShowing && (
          <>
            <Info title="Realese date:" info={date} />

            <Info title="Genres:" info={genres} />

            <Info title="Chart:" info={`#${game.rating_top} Top ${year}`} />

            <Info title="Metacritic:" info={game.metacritic} />
          </>
        )}

        <View onClick={isShowing ? close : open}>
          {isShowing ? "View less" : "View more"}
        </View>
      </Content>
    </Container>
  );
};

const Container = styled.article`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

const StyledImage = styled(Image)`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const View = styled.button`
  justify-self: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export const MemoGameCard = memo(GameCard);
