import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  margin: 10px 40px;
  @media (max-width: 767px) {
    margin: 10px;
  }
`;
export const Img = styled.img`
  display: block;
  width: 50%;
  padding: 0 15px;
`;
export const Title = styled.p`
  font-size: 26px;
  color: #006fb6;
  line-height: 0.8;
  padding: 0 5px 10px 0;
`;

export const Div = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 30px;
`;
