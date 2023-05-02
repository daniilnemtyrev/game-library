// @ts-nocheck
import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";

export function Text({ title = "", text = "", size = "L", align = "center" }) {
  return (
    <Container align={align}>
      {title && <Title size={size}>{title}</Title>}
      {text && <StyledText>{text}</StyledText>}
    </Container>
  );
}

const Container = styled.div`
  ${switchProp("align", {
    left: css`
      text-align: left;
    `,

    right: css`
      text-align: right;
    `,

    center: css`
      text-align: center;
    `,
  })}
`;

const Title = styled.span`
  font-weight: bold;
  ${switchProp("size", {
    S: css`
      font-size: 20px;
      line-height: 24px;
    `,

    M: css`
      font-size: 28px;
      line-height: 32px;
    `,

    L: css`
      font-size: 36px;
      line-height: 40px;
    `,
  })}
`;

const StyledText = styled.p`
  font-size: 16px;
  margin: 8px 0 0;
`;
