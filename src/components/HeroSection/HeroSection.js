import React, { useState, useRef } from "react";
import logo from "../../assets/svg-1.svg";
import {
  Hero,
  HeroContainer,
  HeroLeft,
  HeroLeftContent,
  HeroRight,
  HeroRightContent,
  TopLine,
  Title,
  Subtitle,
  Image,
  StyledButton as Button,
} from "./HeroSection.styled";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [mouseOver, setMouseOver] = useState(false);
  const text = useRef();

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <Hero id="/">
      <HeroContainer>
        <HeroLeft>
          <HeroLeftContent>
            <TopLine>&lt;home /&gt;</TopLine>
            <Title>"Wecome to my personal website."</Title>
            <Subtitle>
              -{" "}
              <span
                style={{
                  color: mouseOver ? `#6e00ff` : `white`,
                  fontWeight: "500",
                  transition: "all 500ms ease-in-out",
                }}
              >
                Jethro Au
              </span>
              , a web developer
            </Subtitle>
            <Link
              to="contact"
              spy={true}
              duration={500}
              smooth="true"
              offset={-80}
            >
              <Button fontBig big>
                Contact Me!
              </Button>
            </Link>
          </HeroLeftContent>
        </HeroLeft>
        <HeroRight>
          <HeroRightContent>
            <Link
              to="about"
              spy={true}
              duration={500}
              smooth="true"
              offset={-80}
            >
              <Image
                src={logo}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              ></Image>
            </Link>
          </HeroRightContent>
        </HeroRight>
      </HeroContainer>
    </Hero>
  );
};

export default HeroSection;
