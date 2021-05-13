import styled from "styled-components";
export const Container = styled.div`
  display: block;
  max-width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 20rem 0.5em 20rem;
  background-color: lightgray;
  @media (max-width: 1024px) {
    margin: 0 2rem 0.5em 2rem;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  color: black;
  margin: 20px;
  font-weight: 700;
  text-align: center;
`;

export const Title = styled.h2`
  color: darkcyan;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  padding-top: 15px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Divs = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  height: 20px;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FirstLine = styled.p`
  text-align: left;
  font-size: 18px;
  font-weight: 700;
`;
export const SecondLine1 = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;
export const SecondLine2 = styled.p`
  font-weight: 700;
`;

export const ThirdLine1 = styled.p`
  text-transform: uppercase;
`;
export const ThirdLine2 = styled.p``;

export const Border = styled.div`
  width: 100px;
  height: 5px;
  color: black;
`;

export const Title2 = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  padding-top: 20px;
`;
export const Meaning = styled.div`
  text-align: center;
  font-size: 16px;
`;
