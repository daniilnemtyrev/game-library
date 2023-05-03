// @ts-nocheck
import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";

export function Text({
  title = "",
  text = "",
  size = "L",
  align = "center",
  hover = false,
  lineClamp,
  className,
  children,
}) {
  return (
    <Container align={align} lineClamp={lineClamp} className={className}>
      {title && (
        <Title size={size} hover={hover}>
          {title}
        </Title>
      )}
      {text && <StyledText>{text}</StyledText>}
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp ?? "none"};
  -webkit-box-orient: vertical;
  overflow: hidden;
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

    XL: css`
      font-size: 72px;
      line-height: 68px;
    `,
  })}

  &:hover {
    opacity: ${({ hover }) => (hover ? 0.6 : 1)};
  }
`;

const StyledText = styled.p`
  font-size: 16px;
  margin-top: 12px;
`;
