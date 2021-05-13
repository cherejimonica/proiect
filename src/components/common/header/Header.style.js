import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  height: 20rem;
  margin-top: 0.5rem;
  padding-top: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
  @media (max-width: 767px) {
    padding-left: 0;
  }
`;

export const Para = styled.p`
  color: white;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 60px;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  
`;

export const Border = styled.div`
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgb(185, 182, 182),
    transparent
  );
  width: 100%;
`;

export const SimpleDiv1 = styled.div``;
export const SimpleDiv2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.p`
  color: white;
  font-size: 4rem;
  padding-left: 0.5rem;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Title = styled.p`
  padding-left: 11rem;
  color: white;
  font-family: "Sirin Stencil", cursive;
  font-weight: 700;
  font-size: 5rem;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 3rem;
    padding-left: 3rem;
  }
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
`;
export const Img2 = styled.img`
  width: 150px;
  @media (max-width: 1024px) {
    width: 100px;
  }
`;
