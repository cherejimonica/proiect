import styled from "styled-components";
export const Container = styled.div`
  max-width: 100%;
  margin: 0 20rem;
  height: 100%;
  @media (max-width: 1024px) {
    margin: 0 5rem;
  }
`;
export const Title = styled.p`
  font-size: 28px;
  color: green;
  font-weight: 700;
  text-align: center;
  padding: 25px 0;
`;
export const Img = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  width: 100%;
`;
export const Para = styled.p`
  text-align: center;
`;
export const Sec1 = styled.div`
  background-color: lightgray;
  height: 100%;
  width: 100%;
  margin: 20px 0;
  border-radius: 5px;
  padding: 10px 0;
`;
export const List = styled.ol``;
export const Li = styled.li`
  font-size: 16px;
  text-align: center;
`;
