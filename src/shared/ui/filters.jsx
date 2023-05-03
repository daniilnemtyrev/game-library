import styled from "styled-components";
import { FilterDirection } from "shared/assets/icons";

export const Filters = ({
  placeholder,
  currentValue,
  filters,
  onSetFilter,
  onToggleDirection,
  onResetHandler,
  toggle,
  isOpen,
}) => (
  <Container onClick={toggle}>
    <Name>{placeholder}</Name>
    <Modal isOpen={isOpen}>
      {filters.map((filter) => (
        <Button
          onClick={() => onSetFilter(filter)}
          key={filter.id}
          current={filter.name === currentValue}
        >
          {filter.name}
        </Button>
      ))}
      {currentValue && <Reset onClick={onResetHandler}>reset</Reset>}
    </Modal>
    {currentValue && onToggleDirection && (
      <ButtonDirection onClick={onToggleDirection}>
        <FilterDirection />
      </ButtonDirection>
    )}
  </Container>
);

const Container = styled.div`
  width: 200px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  border-radius: 5px;
  z-index: 999;
  transition: all 0.2s;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  padding: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  text-align: left;
  padding: 5px;
  cursor: pointer;
  font-weight: ${({ current }) => (current ? 600 : 400)};
  &:hover {
    opacity: 0.7;
  }
`;

const ButtonDirection = styled.button`
  position: absolute;
  right: 5px;
  top: 6px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Reset = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.ligthGray};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`;
