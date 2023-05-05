import styled from "styled-components";

export function Dots({ items, goToSlide, slideNumber }) {
  return (
    <Container>
      {items.map((item, index) => (
        <Dot
          key={item.id}
          selected={slideNumber === index}
          onClick={() => goToSlide(index)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
  margin-top: 20px;
`;

const Dot = styled.div`
  background-color: ${({ selected }) => (selected ? "violet" : "#e7e7e7")};
  border-radius: 5px;
  height: 10px;
  width: 10px;
  cursor: pointer;
`;
