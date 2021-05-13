import React from "react";
import {
  DropdownWrap,
  DropdownItem,
  ContainerButton,
  LinkC,
} from "./DownMenu.style";

export const DownMenu2 = () => {
  const infoWestieValues = ["Nutritie", "Sanatate", "Dresaj", "Diverse"];
  return (
    <DropdownWrap>
      {infoWestieValues.map((val) => (
        <DropdownItem>
          <ContainerButton>
            <LinkC to={`${val}`}>{val}</LinkC>
          </ContainerButton>
        </DropdownItem>
      ))}
    </DropdownWrap>
  );
};
