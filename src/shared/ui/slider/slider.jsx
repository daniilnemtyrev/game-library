import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Dots } from "./dots";
import { SlidesList } from "./slideList";

export const Slider = ({ images, current = 0, close }) => {
  const [items] = useState(images);
  const [slide, setSlide] = useState(current);

  const changeSlide = useCallback(
    (direction = 1) => {
      let slideNumber = 0;

      if (slide + direction < 0) {
        slideNumber = items.length - 1;
      } else {
        slideNumber = (slide + direction) % items.length;
      }

      setSlide(slideNumber);
    },
    [items.length, slide],
  );

  const goToSlide = (number) => {
    setSlide(number);
  };

  return (
    <Container>
      <SlidesList items={items} slideNumber={slide} />
      <Dots items={items} goToSlide={goToSlide} slideNumber={slide} />
      <Prev onClick={() => changeSlide(-1)} />
      <Next onClick={() => changeSlide(1)} />
      <Close onClick={close}>X</Close>
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const Prev = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  right: 50%;
`;

const Next = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  left: 50%;
`;

const Close = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 30px;
  position: absolute;
  right: 20px;
  top: 0;
  background-color: white;
  cursor: pointer;
`;
