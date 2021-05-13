import styled from "styled-components";
import ImageHP from "../images/back.jpg";
export const Container = styled.div`
  background-image: url(${ImageHP});
  display: block;
  max-width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 20rem 0.5em 20rem;
  @media (max-width: 1024px) {
    margin: 0 10px 5px 10px;
  }
  @media (max-width: 767px) {
    margin: 0 10px 5px 10px;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  color: black;
  margin: 20px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Title = styled.h2`
  color: red;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  padding-top: 15px;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Each = styled.div``;
