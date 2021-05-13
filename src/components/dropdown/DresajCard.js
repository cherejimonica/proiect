import React from "react";
import { Container, Img, Title, Para, LinkToD } from "./DresajCard.style";

export const DresajCard = ({ image, title, link, paragraph }) => {
  return (
    <Container>
      <Img src={image} />
      <Title>{title}</Title>
      <Para>
        {paragraph}
      </Para>
      <LinkToD to={link}>Afla mai multe</LinkToD>
    </Container>
  );
};
