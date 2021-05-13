import styled from "styled-components";
import { Link as L } from "react-router-dom";
export const Container = styled.ul`
  max-width: 100%;
  margin: 0 20rem;
  height: 15rem;
  background-color: black;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 767px) {
    margin: 0 5rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Section = styled.li`
  font-size: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    font-size: 1rem;
    flex: 1;
  }
`;

export const Para = styled.p`
  font-size: 2.3rem;
  color: white;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  color: rgba(214, 141, 94);
  font-weight: 700;
  letter-spacing: 1px;
  @media (max-width: 1024px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;
export const Link = styled.a`
  font-size: 1.5rem;
  color: white;
  padding: 0.2rem;
`;

export const SmallP = styled.p`
  font-size: 1.5rem;
  color: white;
  padding: 0.2rem;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const LinkTo = styled(L)``;
