import styled from "styled-components";
import Image from "next/image";
import { Text } from "shared/ui/text";
import { memo } from "react";
import { useToggle } from "shared/hooks";
import { format } from "date-fns";
import Link from "next/link";
import { AppRoutes } from "shared/routes";
import { MemoPlatforms as Platforms } from "./platforms";
import { MemoRatingButtons as RatingButtons } from "./rating-buttons";
import { Info } from "./info";

const GameCard = ({ game }) => {
  const { open, close, isShowing } = useToggle();

  const openHandler = (e) => {
    e.stopPropagation();
    open();
  };

  const closeHandler = (e) => {
    e.stopPropagation();
    close();
  };

  const src = game.background_image ?? "/defaultGameCard.jpg";
  const date = format(new Date(game.released), "MMM dd, y");
  const year = date.split(",")[1];

  const genres = game.genres.map(
    (genre, index, arr) =>
      `${genre.name}${index !== arr.length - 1 ? ", " : ""}`,
  );
  return (
    <Container isShowing={isShowing}>
      <Wrapper isShowing={isShowing}>
        <ImageContainer>
          <StyledImage
            fill
            src={src}
            priority={false}
            sizes="(max-width: 1200px) 700px,
 (max-width: 768px) 300px,
 200px"
            alt={`${game.name} image`}
          />
        </ImageContainer>

        <Content>
          <Platforms platforms={game.parent_platforms} />
          <Link href={`${AppRoutes.GAME}/${game.slug}`}>
            <Text
              title={game.name}
              size="S"
              align="left"
              lineClamp={isShowing ? undefined : 1}
              hover
            />
          </Link>

          <RatingButtons rating={game.ratings_count} />
          {isShowing && (
            <>
              <Info title="Realese date:" info={date} />

              <Info title="Genres:" info={genres} />

              <Info title="Chart:" info={`#${game.rating_top} Top ${year}`} />

              <Info title="Metacritic:" info={game.metacritic} />
            </>
          )}

          <View onClick={isShowing ? closeHandler : openHandler}>
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
  max-width: 400px;
  min-width: 300px;
  position: relative;
  height: 352px;
`;
const Wrapper = styled.div`
  ${({ isShowing, theme }) =>
    isShowing
      ? `
      position: absolute;
      width: 100%; 
      z-index: 1;
      top:0;
      left: 0;  
      border-radius: 10px;
      background-color: ${theme.colors.primary};`
      : ""}
`;

const ImageContainer = styled.div`
  min-width: 300px;
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
