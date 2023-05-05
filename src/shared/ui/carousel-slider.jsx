import React, { useRef, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useToggle } from "shared/hooks";
import { Portal } from "./Portal";
import { Slider } from "./slider";

export const CarouselWithSlider = ({ images }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const ref = useRef();
  const { open, close, isShowing } = useToggle();

  const openSlider = (id) => {
    open();
    setCurrentSlider(id);
  };

  const closeSlider = (e) => {
    if (!ref?.current?.contains(e.target)) {
      close();
    }
  };

  return (
    <Container>
      {images.map((image) => (
        <Image
          onClick={() => openSlider(image.id)}
          src={image.link}
          width={300}
          height={150}
        />
      ))}
      {isShowing ? (
        <Portal>
          <Wrapper onClick={closeSlider}>
            <div ref={ref}>
              <Slider images={images} current={currentSlider} close={close} />
            </div>
          </Wrapper>
        </Portal>
      ) : null}
    </Container>
  );
};

const Container = styled.section`
  width: 400px;
  display: flex;
  overflow-x: auto;
  margin-bottom: 30px;
  gap: 20px;

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;
