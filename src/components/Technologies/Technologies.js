import React from "react";
import {
  DiPython,
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiNodejs,
  DiDjango,
  DiGit,
} from "react-icons/di";

import {
  SiTailwindcss,
  SiBootstrap,
  SiSqlite,
  SiMongodb,
  SiFigma,
  SiCanva,
  SiMicrosoftoffice,
} from "react-icons/si";

import { FaJava, FaGithub } from "react-icons/fa";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="Technologies">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>
    <List>

      <ListItem>
        <div style={{ display: "flex", gap: "1rem" }}>
          <DiPython size="3rem" />
          <DiJavascript1 size="3rem" />
          <FaJava size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Started with C & Java <br />
            Now focused on Python & JS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div style={{ display: "flex", gap: "1rem" }}>
          <DiReact size="3rem" />
          <DiHtml5 size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Build responsive UIs <br />
            Experience with React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div style={{ display: "flex", gap: "1rem" }}>
          <SiTailwindcss size="3rem" />
          <SiBootstrap size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>CSS Frameworks</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tailwind CSS & Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div style={{ display: "flex", gap: "1rem" }}>
          <DiDjango size="3rem" />
          <DiNodejs size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Proficient in Django <br />
            Past experience in Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div style={{ display: "flex", gap: "1rem" }}>
          <SiSqlite size="3rem" />
          <SiMongodb size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            Use SQLite with Django <br />
            Familiar with MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <div style={{ display: "flex", gap: "1rem" }}>
          <FaGithub size="3rem" />
          <DiGit size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Skilled in Git & GitHub <br />
            For team and solo projects
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
