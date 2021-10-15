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
} from "./AboutSection.styled";
import "./Wave.css";
import cv from "./CV2022.pdf";

const AboutSection = () => {
  return (
    <About id="about">
      <div class="custom-shape-divider-top-1634178191">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <AboutContainer>
        <Content>
          <ContentLeft>
            <Image src={icon}></Image>
          </ContentLeft>
          <ContentRight>
            <TopLine>&lt;about /&gt;</TopLine>
            <Title>So...who am I ❓</Title>
            <Subtitle>
              Jethro Au, a <span style={{ color: "red" }}>web developer</span>!
              💻
            </Subtitle>
            <Paragraph>
              &lt;🌟&gt; A passionate web developer with great interest in the
              web development. Excellent development skills and project
              experience gained from my education and personal projects. Very
              curious about different tech stacks. Currently learning front-end
              and my ultimate goal is to become a
              <span style={{ color: "red", fontWeight: "400" }}>
                {" "}
                full-stack developer!{" "}
              </span>
              &lt;/🌟&gt;
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
