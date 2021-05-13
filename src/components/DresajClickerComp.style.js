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
    padding: 20px;
  }
`;

export const Div = styled.div`
  max-width: 100%;
  height: 900px;
  background-color: black;
  margin: 0 100px 50px 100px;
  @media (max-width: 1024px) {
    margin: 0 20px 20px 20px;
  }
  @media (max-width: 767px) {
    margin: 0 20px 20px 20px;
  }
`;
export const Para = styled.p`
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  padding-top: 50px;
`;
export const D = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const P = styled.p`
  text-align: left;
  font-size: 15px;
  margin-left: 100px;
  @media (max-width: 1024px) {
    text-align: center;
    margin: 10px;
  }
`;
export const I = styled.img`
  margin-right: 100px;
  width: 350px;
  height: 350px;
  @media (max-width: 1024px) {
    margin: 10px;
  }
`;
export const P2 = styled.p`
  text-align: left;
  font-size: 15px;
`;
export const I2 = styled.img`
  width: 350px;
  height: 350px;
`;
