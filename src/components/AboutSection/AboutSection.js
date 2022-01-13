import React from "react";
import icon from "../../assets/svg-2.svg";
import {
  About,
  AboutContainer,
  Title,
  Content,
  ContentLeft,
  ContentRight,
  TopLine,
  Subtitle,
  Paragraph,
  Image,
  Button,
  ButtonControl,
  DownloadIcon,
  GithubIcon,
  ColorSpan,
} from "./AboutSection.styled";
import cv from "./CV2022.pdf";

const AboutSection = () => {
  return (
    <About id="about">
      <AboutContainer>
        <Content>
          <ContentLeft>
            <Image src={icon}></Image>
          </ContentLeft>
          <ContentRight>
            <TopLine>&lt;about /&gt;</TopLine>
            <Title>So...who am I?</Title>
            <Subtitle>
              Jethro Au, a <ColorSpan color="red">web developer</ColorSpan>! 💻
            </Subtitle>
            <Paragraph>
              A hardworking and passionate STEM graduate with great interest and
              skills in Web Development. Excellent communication skills and
              project experience gained from my education and personal projects.
              Always love to learn different stacks of technologies. My current
              tech stack includes <ColorSpan fw="400">ReactJS</ColorSpan>,{" "}
              <ColorSpan fw="400">Next.js</ColorSpan>,{" "}
              <ColorSpan fw="400">Express.js</ColorSpan>,{" "}
              <ColorSpan fw="400">MongoDB</ColorSpan>, and more.
            </Paragraph>
            <ButtonControl>
              <a href={cv} download="CV.pdf" style={{ textDecoration: "none" }}>
                <Button>
                  <DownloadIcon />
                  CV
                </Button>
              </a>
              <a
                href="https://www.github.com/obiito01"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button>
                  <GithubIcon />
                  Github
                </Button>
              </a>
            </ButtonControl>
          </ContentRight>
        </Content>
      </AboutContainer>
    </About>
  );
};

export default AboutSection;
