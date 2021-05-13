import styled from "styled-components";
export const Container = styled.div`
  max-width: 100%;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  padding: 50px 300px 0 300px;
  border-bottom: 5px solid #ed5d5a;
  display: block;
  @media (max-width: 1024px) {
    padding: 10px 30px;
  }
  @media (max-width: 767px) {
    padding: 5 15px;
  }
`;

export const Div = styled.div`
  max-width: 100%;
  height: 700px;
  background-color: black;
  margin: 0 100px 50px 100px;
  @media (max-width: 767px) {
    margin: 0 20px 5px 20px;
  }
`;
export const Para = styled.p`
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  padding-top: 50px;
  @media (max-width: 767px) {
    line-height: 1;
  }
`;

export const P = styled.p`
  text-align: center;
  font-size: 15px;
  margin: 0 100px;
  @media (max-width: 767px) {
    margin: 0 25px;
  }
`;
