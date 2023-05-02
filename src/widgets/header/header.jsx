import { GamepadLogo } from "shared/assets/icons";
import styled from "styled-components";
import { SearchInput } from "features/filters";
import Link from "next/link";
import { AppRoutes } from "shared/routes";
import { fade, pulse } from "./animations";

export const Header = () => {
  console.log(1);

  return (
    <Container>
      <Link href={AppRoutes.HOME}>
        <StyledGamepadLogo />
      </Link>
      <SearchInput />
      <Menu>
        <Sticks />
      </Menu>
    </Container>
  );
};

const Container = styled.header`
  padding: 1rem 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledGamepadLogo = styled(GamepadLogo)`
  cursor: pointer;
  .controller {
    animation: ${fade} infinite 2s linear;
  }
  &:hover {
    .border {
      transition: fill 0.4s ease-out;

      fill: #200772;
    }

    .circle {
      animation: ${pulse} 0.1s forwards linear;
    }
  }
`;

const Menu = styled.button`
  width: 20px;
  height: 30px;
  cursor: pointer;

  &:hover div {
    &::before {
      left: -4px;
    }

    &::after {
      left: 4px;
    }
  }
`;

const Sticks = styled.div`
  width: 20px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  align-self: center;

  &:before {
    content: "";
    width: 20px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 0;
    top: -7px;
    transition: left 0.2s;
  }

  &:after {
    content: "";
    width: 20px;
    height: 3.5px;
    background-color: ${({ theme }) => theme.colors.white};
    position: absolute;
    left: 0;
    top: 7px;
    transition: left 0.2s;
  }
`;
