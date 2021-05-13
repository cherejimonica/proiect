import styled from "styled-components";
export const Container = styled.div`
  display: block;
  max-width: 100%;
  margin: 0 20rem 0.5em 20rem;
  border: 2px solid lightgray;
  border-radius: 5px;
  @media(max-width: 1024px) {
    margin: 0 5rem 0.5rem 5rem;
  }
  @media(max-width: 767px) {
    margin: 0 2rem 0.5rem 2rem;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 15px;
`;

export const Para = styled.p`
  font-size: 18px;
  max-width: 100%;
  color: black;
  padding-left: 20px;
`;

export const Display = styled.div`
  display: none;
`;
