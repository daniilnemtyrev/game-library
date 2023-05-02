import { memo } from "react";
import { Gift, Other, Plus } from "shared/assets/icons";
import styled from "styled-components";

export const RatingButtons = ({ rating }) => (
  <Container>
    <Button>
      <IconContainer>
        <Plus />
      </IconContainer>
      <Count>{rating}</Count>
    </Button>
    <Button>
      <IconContainer>
        <Gift />
      </IconContainer>
    </Button>
    <Button>
      <IconContainer>
        <Other />
      </IconContainer>
    </Button>
  </Container>
);

const Container = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 6px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  width: 14px;
  height: 14px;
`;

const Count = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const MemoRatingButtons = memo(RatingButtons);
