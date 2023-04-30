import { GamepadLogo } from "shared/assets/icons";
import styled, { keyframes } from "styled-components";

export const Header = () => {
  console.log(1);

  return (
    <Container>
      <StyledGamepadLogo />
    </Container>
  );
};

const fade = keyframes`
0% {
fill:#3914AF;
}
50% {
 fill:#200772	;
}
100%{
  fill:#3914AF;
}
`;

const pulse = keyframes`
0% {
  stroke-width: 1px;
}
50% {
    stroke-width: 3px;
}
100% {
    stroke-width: 6px;
}
`;

const Container = styled.header`
  padding: 1rem;
`;

const StyledGamepadLogo = styled(GamepadLogo)`
  cursor: pointer;
  .controller {
    animation: ${fade} infinite 2s linear;
  }
  &:hover {
    .border {
      transition: fill 0.4s;

      fill: #200772;
    }

    .circle {
      animation: ${pulse} 0.1s forwards linear;
    }
  }
`;
