import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  background-color: lightgray;
  display: block;
  max-width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 20rem 0.5em 20rem;
  padding: 35px;
  @media (max-width: 1024px) {
    margin: 0 2rem 0.5em 2rem;
  }
`;
export const Text = styled.p`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  padding: 20px 0;
`;
export const Image1 = styled.img`
  width: 50%;
  height: 230px;
  display: block;
  margin: 0 auto;
  padding: 20px 0;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 20px 0;
  @media (max-width: 1024px) {
    &:nth-of-type(2) {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 767px) {
    &:nth-of-type(1) {
      flex-wrap: wrap;
    }
  }
`;

export const Li = styled.li``;
export const EachImg = styled.img`
  width: 25%;
  width: 120px;
  height: 120px;
  @media (max-width: 767px) {
    padding: 10px;
    width: 100%;
    height: 70px;
    max-width: 100%;
    flex: 1;
  }
`;
export const Img = styled.img`
  width: 70px;
  padding-left: 7.5px;
  padding-right: 7.5px;
  @media (max-width: 1024px) {
    padding: 10px;
    width: 100%;
    height: 50px;
    max-width: 100%;
    flex: 1;
  }
`;
export const Icon = styled(FontAwesomeIcon)`
  width: 100%;
  font-size: 40px;
`;
export const Ref = styled.a`
  padding: 0 20px;
`;
