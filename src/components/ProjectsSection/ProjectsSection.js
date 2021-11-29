import React from "react";
import {
  Projects,
  ProjectsContainer,
  Title,
  Content,
  Description,
  GithubLink,
} from "./ProjectsSection.styled";
import data from "./data";
import { Card } from "../../components";

const ProjectsSection = () => {
  return (
    <Projects id="projects">
      <ProjectsContainer>
        <Title>Projects</Title>
        <Description>
          More projects can be found on my{" "}
          <GithubLink href={"https://www.github.com/obiito01"} target="_blank">
            GitHub
          </GithubLink>
          !
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
