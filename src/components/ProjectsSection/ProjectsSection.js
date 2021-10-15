import React from "react";
import {
  Projects,
  ProjectsContainer,
  Title,
  Content,
  Description,
} from "./ProjectsSection.styled";
import data from "./data";
import { Card } from "../../components";

const ProjectsSection = () => {
  return (
    <Projects id="projects">
      <ProjectsContainer>
        <Title>&lt;projects📂 /&gt;</Title>
        <Description>
          These are just some of my projects. Feel free to check out my GitHub
          for more!
        </Description>
        <Content>
          {data.map((item, index) => {
            return <Card key={index} {...item} />;
          })}
        </Content>
      </ProjectsContainer>
    </Projects>
  );
};

export default ProjectsSection;
