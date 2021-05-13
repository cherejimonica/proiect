import styled from "styled-components";
import { Link as L } from "react-router-dom";
import { FaBars } from "react-icons/fa";
export const ContainerBar = styled.div`
  max-width: 100%;
  margin: 0 20rem;
  height: 6rem;
  /* z-index: 10; */
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Button = styled.li`
  background-color: rgb(122, 129, 153);
  width: 100%;
  margin: 5px 2px;
  height: 6rem;
  border-radius: 1.5rem;
`;

export const LinkC = styled(L)`
  font-size: 2rem;
  color: #cfd1cf;
  display: block;
  text-align: center;
  padding: 2rem;
  font-weight: 700;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  width: 4rem;
  height: 4rem;
  /* z-index: 11; */
  @media (max-width: 767px) {
    display: block;
    left: 0;
    position: absolute;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "30vh" : 0)};
  width: 100vw;
  max-width: 100%;
  transition: height 0.4s ease-in-out;
  @media (min-width: 767px) {
    display: none;
  }
`;
/* style={{ left: "100%"  }} */
export const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 20%;
  top: 75%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
