import styled from "styled-components";
import { Slide } from "./slide";

export function SlidesList({ slideNumber, items }) {
  return (
    <Container style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {items.map((slide) => (
        <Slide key={slide.id} data={slide} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;
