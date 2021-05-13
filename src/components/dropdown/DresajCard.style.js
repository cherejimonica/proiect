import styled from "styled-components";
import { Link as L } from "react-router-dom";
export const Container = styled.div`
  max-width: 100%;
  margin: 15px;
  height: 600px;
  width: 31%;
  box-shadow: 0 0 70px -30px #555;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    height: 100%;
  }
`;
export const Img = styled.img`
  height: 330px;
  width: 100%;
  transform: scale(1);
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.4);
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 60px 0 30px 0;
`;
export const Para = styled.p``;
export const LinkToD = styled(L)`
  border: 1px solid #558749;
  border-radius: 5px;
  padding: 5px 10px;
  color: white;
  background-color: #558749;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 20px;
  &:hover {
    background-color: white;
    color: #558749;
  }
`;
