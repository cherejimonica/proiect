import styled from "styled-components";
import Back from "../common/img/bac.jpg";

export const Container = styled.div`
  height: 100%;
  max-width: 100%;
  position: relative;
  border: 1px solid black;
  /* opacity: 0.99; */
  padding-bottom: 20px;
  padding-top: 20px;
  :before {
    content: "";
    position: absolute;
    opacity: 0.2;
    z-index: -1;
    background-image: url("${Back}");
    background-position: center;
    width: 100%;
    height: 100%;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  font-style: italic;
  background-color: lightgray;
`;
export const Para = styled.p`
  font-size: 17px;
  padding-top: 20px;
  text-align: center;
  line-height: 1.2;
`;

export const More = styled.p`
  font-size: 22px;
  color: blueviolet;
  font-weight: 700;
  border-radius: 10px;
  text-align: center;
  padding: 30px 20px;
  margin: 20px 450px;
  background-color: thistle;
  font-style: italic;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  @media (max-width: 1024px) {
    margin: 150px;
    padding: 20px 10px;
  }
  @media (max-width: 767px) {
    margin: 30px;
    padding: 10px 5px;
  }
`;
