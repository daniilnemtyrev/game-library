// @ts-nocheck
import styled from "styled-components";
import Image from "next/image";
import { Text } from "shared/ui/text";
import { memo } from "react";
import { useToggle } from "shared/hooks";
import { format } from "date-fns";
import { MemoPlatforms as Platforms } from "./platforms";
import { MemoRatingButtons as RatingButtons } from "./rating-buttons";
import { Info } from "./info";

const GameCard = ({ game }) => {
  const { open, close, isShowing } = useToggle();

  const src = game.background_image ?? "/defaultGameCard.jpg";
  const date = format(new Date(game.released), "MMM dd, y");
  const year = date.split(",")[1];

  const genres = game.genres.map(
    (genre, index, arr) =>
      `${genre.name}${index !== arr.length - 1 ? ", " : ""}`
  );
  // console.log(game);
  return (
    <Container isShowing={isShowing}>
      <Wrapper isShowing={isShowing}>
        <ImageContainer>
          <StyledImage fill src={src} alt={`${game.name} image`} />
        </ImageContainer>

        <Content>
          <Platforms platforms={game.parent_platforms} />

          <Text
            title={game.name}
            size="S"
            align="left"
            lineClamp={isShowing ? undefined : 1}
          />
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
      </Wrapper>
    </Container>
  );
};

const Container = styled.article`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  width: 100%;
  min-width: 230px;
  position: relative;
  place-self: center;
  height: ${({ isShowing }) => (isShowing ? "354px" : "auto")};
`;
const Wrapper = styled.div`
  ${({ isShowing, theme }) =>
    isShowing
      ? `
      position: absolute;
      width: 100%; 
      z-index: 10;
      top:0;
      left: 0;  
      border-radius: 10px;
      background-color: ${theme.colors.primary};`
      : ""}
`;

const ImageContainer = styled.div`
  min-width: 200px;
  height: 220px;
  position: relative;
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
