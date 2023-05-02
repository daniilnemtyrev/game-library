import styled from "styled-components";

export const Info = ({ title, info }) => (
  <Container>
    <span>{title}</span>
    <span>{info}</span>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
  margin: 5px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  & span:first-child {
    color: ${({ theme }) => theme.colors.ligthGray};
  }
`;
