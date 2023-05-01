import { keyframes } from "styled-components";

export const fade = keyframes`
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

export const pulse = keyframes`
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
