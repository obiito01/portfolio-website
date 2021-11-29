import React from "react";
import {
  Skills,
  SkillsContainer,
  Title,
  Grid,
  GridItem,
  ItemIcon,
  ItemName,
  Description,
} from "./SkillsSection.styled";
import data from "./data";

const AboutSection = () => {
  return (
    <Skills id="skills">
      <SkillsContainer>
        <Title>What can I do?</Title>
        <Description>
          As a web developer, I have skills to build the client side web app,
          program a backend server api for my web app, connect it to a database,
          and deploy it to the world 🚀🌎!
        </Description>
        <Grid>
          {data.map((item, index) => {
            const { img, name } = item;
            return (
              <GridItem key={index}>
                <ItemIcon src={img}></ItemIcon>
                <ItemName>{name}</ItemName>
              </GridItem>
            );
          })}
        </Grid>
      </SkillsContainer>
    </Skills>
  );
};

export default AboutSection;
