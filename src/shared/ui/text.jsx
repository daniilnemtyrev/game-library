import styled from "styled-components";

export function Text({ title, text }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {text && <StyledText>{text}</StyledText>}
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 40px;
`;

const StyledText = styled.p`
  font-size: 16px;
  margin: 8px 0 0;
`;
