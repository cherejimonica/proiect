import styled from "styled-components";
import Back from "../common/img/bac.jpg";

export const Container = styled.div`
  height: 100%;
  max-width: 100%;
  position: relative;
  opacity: 0.99;
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
`;
export const Para = styled.p`
  font-size: 17px;
  padding-top: 20px;
  text-align: center;
  line-height: 1.2;
`;
export const Img = styled.img`
  display: block;
  margin: 0 auto;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 767px) {
    max-width: 100%;
  }
`;
export const List = styled.ul`
  padding-bottom: 20px;
  list-style-type: square;
`;
export const Li = styled.li``;
