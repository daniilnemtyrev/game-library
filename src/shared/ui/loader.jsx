import styled, { keyframes } from "styled-components";

export const Loader = () => <Circle />;

export const rotate = keyframes`


to {
    transform: rotate(360deg);
}
`;

const Circle = styled.div`
  margin: 0.5em;
  width: 3em;
  height: 3em;
  position: relative;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #ddd 10%, #60498b 50%);
  animation: ${rotate} 1s linear infinite;

  &:after {
    border-radius: 50%;
    display: block;
    content: "";
    background-color: ${({ theme }) => theme.colors.bg};
    position: absolute;
    left: 0.5em;
    top: 0.5em;
    height: 2em;
    width: 2em;
  }
`;
