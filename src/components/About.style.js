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
    margin: 0 5px 5px 5px;
  }
`;
export const Text = styled.div`
  font-size: 22px;
  color: black;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Divs = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
  }
`;

export const WestieImg = styled.img`
  border-radius: 160px;
  @media (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
`;
