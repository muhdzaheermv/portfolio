import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 50, text: "JavaScripts Projects" },
  { number: 25, text: "Github Repositories" },
  { number: 43, text: "React Projects" },
  { number: 22, text: "HTML&CSS Website Clone Projects" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomblishment</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
