import { memo } from "react";
import {
  AndroidLogo,
  IOSLogo,
  LinuxLogo,
  MacOSLogo,
  NintendoLogo,
  PlaystationLogo,
  WindowsLogo,
  XboxLogo,
} from "shared/assets/icons";
import styled from "styled-components";

const Platforms = ({ platforms }) => {
  const icons = platforms.map((platform) => {
    switch (platform.platform.id) {
      case 1:
        return { icon: <WindowsLogo />, id: 1 };
      case 2:
        return { icon: <PlaystationLogo />, id: 2 };
      case 3:
        return { icon: <XboxLogo />, id: 3 };
      case 4:
        return { icon: <IOSLogo />, id: 4 };
      case 5:
        return { icon: <MacOSLogo />, id: 5 };
      case 6:
        return { icon: <LinuxLogo />, id: 6 };
      case 7:
        return { icon: <NintendoLogo />, id: 7 };
      case 8:
        return { icon: <AndroidLogo />, id: 8 };
      default:
        return null;
    }
  });

  return (
    <Container>
      {icons.map((item) => item && <Icon key={item.id}>{item.icon}</Icon>)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  height: 30px;
`;

const Icon = styled.div`
  width: 31px;
  height: 30px;
`;

export const MemoPlatforms = memo(Platforms);
