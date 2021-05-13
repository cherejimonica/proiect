import styled from "styled-components";
export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 5rem 10rem;
  @media (max-width: 1024px) {
    margin: 5rem 10rem;
  }
  @media (max-width: 767px) {
    margin: 2rem;
  }
`;

export const Div = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
