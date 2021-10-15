import React from "react";
import {
  Skills,
  SkillsContainer,
  Title,
  Grid,
  GridItem,
  ItemIcon,
  ItemName,
} from "./SkillsSection.styled";
import data from "./data";

const AboutSection = () => {
  return (
    <Skills id="skills">
      <SkillsContainer>
        <Title>&lt;skills🔨 /&gt;</Title>

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
