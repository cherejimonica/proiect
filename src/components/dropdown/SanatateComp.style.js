import styled from "styled-components";
import { Link as L } from "react-router-dom";
export const Container = styled.div`
  max-width: 100%;
  margin: 0 20rem;
  height: 100%;
  @media (max-width: 1024px) {
    margin: 0 5rem;
  }
`;
export const Link1 = styled(L)``;
export const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 35rem;
  @media (max-width: 1024px) {
    width: 20rem;
  }
`;
export const Title = styled.p`
  font-size: 18px;
  color: green;
  font-weight: 700;
  text-align: center;
  padding: 15px 0;
`;
export const Para = styled.p`
  text-align: center;
`;
export const Div = styled.div`
  width: 31%;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;
export const Divs = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
