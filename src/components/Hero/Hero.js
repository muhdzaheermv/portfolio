import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey <br />
        I'm Muhammed Zaheer
      </SectionTitle>
      <SectionText>
        I'm a freelance React dev passionate about crafting engaging user
        experiences. I work with Tailwind CSS, Bootstrap, HTML, CSS, GitHub,
        Next.js, and Figma. Let's collaborate and build something awesome!
      </SectionText>
      {/* <Button
        onClick={() =>
          (window.location =
            "https://www.linkedin.com/in/muhammed-zaheer-836132244/")
        }
      >
        Learn more
      </Button> */}
      <Button onClick={() => (window.location.href = "#about")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
