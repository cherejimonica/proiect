import styled from "styled-components";

export const SliderImg = styled.img`
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  height: 500px;
  object-fit: cover;
  z-index: 1;
  @media (max-width: 767px) {
    width: 400px;
    max-width: 100%;
    height: 400px;
  }
`;
