import React from "react";
import {
  DropdownWrap,
  DropdownItem,
  ContainerButton,
  LinkC,
} from "./DownMenu.style";

export const DownMenu = () => {
  const aboutValues = ["About Westie"];
  return (
    <DropdownWrap>
      {aboutValues.map((val) => (
        <DropdownItem>
          <ContainerButton>
            <LinkC to="/about">{val}</LinkC>
          </ContainerButton>
        </DropdownItem>
      ))}
    </DropdownWrap>
  );
};
