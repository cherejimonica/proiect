import React from "react";
import { Container, Section, Para, SmallP, LinkTo } from "./Footer.style";
export const Footer = () => {
  return (
    <Container>
      <Section>
        <Para>WestHighland.ro</Para>
        <LinkTo to="/termeni-si-conditii">Termeni si Condiții </LinkTo>
        <LinkTo to="/gdpr">Prelucrarea datelor cu caracter personal</LinkTo>
      </Section>
      <Section>
        <Para>Sfaturi</Para>
        <LinkTo to="/sfaturi">Sfaturi</LinkTo>
      </Section>
      <Section>
        <Para>Parteneri</Para>
        <LinkTo to="/parteneri">Parteneri</LinkTo>
      </Section>
      <Section>
        <Para>Contact</Para>
        <SmallP>Tel: +40 528 971 485</SmallP>
        <SmallP>Mob: +40 740 598 859</SmallP>
        <SmallP>Email: office@WestHighland.ro</SmallP>
      </Section>
    </Container>
  );
};
