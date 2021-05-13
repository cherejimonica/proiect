import React, { useState } from "react";
import { DownMenu } from "./DownMenu";

import { ContainerButton, TopItem } from "./Dropdown.style";

export const Dropdown = () => {
  const [showDrop, setShowDrop] = useState(false);
  // const [selValue, setSelValue] = useState(values[0]);

  // const handleChooseValue = (value) => {
  //   setSelValue(value);
  //   setShowDrop(false);
  // };

  return (
    <div>
      <ContainerButton onClick={() => setShowDrop((prev) => !prev)}>
        <TopItem>ABOUT</TopItem>

        {showDrop && <DownMenu close={() => setShowDrop(false)} />}
      </ContainerButton>
    </div>
    // <ContainerButton>
    //   <TopItem onClick={() => setShowDrop(!showDrop)}>{selValue}</TopItem>
    //   {showDrop && (
    //     <DropdownWrap>
    //       {values.map((value) => (
    //         <DropdownItem onClick={() => handleChooseValue(value)} key={value}>
    //          {value}

    //         </DropdownItem>
    //       ))}
    //     </DropdownWrap>
    //   )}
    // </ContainerButton>
  );
};
