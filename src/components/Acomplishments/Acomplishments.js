import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 50, text: "JavaScript Projects" },
  { number: 25, text: "GitHub Repositories" },
  { number: 11, text: "React Projects" },
  { number: 6, text: "HTML & CSS Website Clone Projects" },
  { number: 3, text: "Full Stack Django Projects" },
  { number: 5, text: "Tailwind CSS Projects" },
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
