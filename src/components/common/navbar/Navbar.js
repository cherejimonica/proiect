import React, { useState } from "react";
import {
  ContainerBar,
  Menu,
  Button,
  LinkC,
  Bars,
  Overlay,
  OverlayMenu,
} from "./Navbar.style";
import { Dropdown } from "../../../components/dropdown/Dropdown";
import { Dropdown2 } from "../../../components/dropdown/Dropdown2";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <ContainerBar>
      <Bars open={open} onClick={() => setOpen(!open)} />
      <Menu>
        <Button>
          <LinkC to="/">HOME</LinkC>
        </Button>
        <Dropdown />
        <Dropdown2 />
        <Button>
          <LinkC to="/sponsors">SPONSORS</LinkC>
        </Button>
        <Button>
          <LinkC to="/contact">CONTACT</LinkC>
        </Button>
      </Menu>
      <Overlay open={open}>
        <OverlayMenu open={open}>
          <Button>
            <LinkC to="/">HOME</LinkC>
          </Button>
          <Dropdown />
          <Dropdown2 />
          <Button>
            <LinkC to="/sponsors">SPONSORS</LinkC>
          </Button>
          <Button>
            <LinkC to="/contact">CONTACT</LinkC>
          </Button>
        </OverlayMenu>
      </Overlay>
    </ContainerBar>
  );
};
