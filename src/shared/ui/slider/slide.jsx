import styled from "styled-components";
import Image from "next/image";

export function Slide({ data: { link } }) {
  return (
    <Container>
      <StyledImage src={link} alt="alt" width={1920} height={1080} priority />
    </Container>
  );
}

const Container = styled.div`
  flex: 1 0 100%;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  height: auto;
  width: 100%;
  @media (min-width: 700px) {
    width: 80%;
  }

  @media (min-width: 1000px) {
    width: 70%;
  }
`;
