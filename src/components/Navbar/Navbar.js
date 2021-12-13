import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import {
  StyledNav,
  NavContainer,
  NavLogo,
  NavHamburger,
  NavMenu,
  NavItem,
  NavLink,
  NavSocials,
  SocialLink,
  ContactButton,
  LogoText,
  NavList,
  ThemeSwitch,
  SwitchCircle,
} from "./Navbar.styled";
import { Link } from "react-scroll";

const Navbar = ({ currentTheme, setCurrentTheme }) => {
  const [click, setClick] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleResize = () => {
    if (window.scrollY >= 80) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }
  };

  const handleSwitch = (e) => {
    if (e.target.checked) {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }

    console.log(currentTheme);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
  }, []);

  return (
    <StyledNav scrollY={scrollY}>
      <NavContainer>
        <NavLogo>
          <Link to="/" spy={true} duration={500} smooth="true">
            <LogoText>&lt;jethroau /&gt;</LogoText>
          </Link>
          <ThemeSwitch onClick={handleSwitch}>
            <input type="checkbox" />
            <SwitchCircle>
              <BsMoon style={{ color: "black" }} />
              <BsSun style={{ color: "black" }} />
            </SwitchCircle>
          </ThemeSwitch>
        </NavLogo>
        <NavHamburger onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </NavHamburger>
        <NavMenu click={click} onClick={() => setClick(false)}>
          <NavList click={click} onClick={() => setClick(false)}>
            <NavItem
              to="about"
              offset={-80}
              spy={true}
              duration={500}
              smooth="true"
            >
              <NavLink
                to="about"
                offset={-80}
                spy={true}
                duration={500}
                smooth="true"
                onClick={() => setClick(false)}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem
              to="skills"
              offset={-80}
              spy={true}
              duration={500}
              smooth="true"
            >
              <NavLink
                to="skills"
                offset={-80}
                spy={true}
                duration={500}
                smooth="true"
                onClick={() => setClick(false)}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem
              to="projects"
              offset={-80}
              spy={true}
              duration={500}
              smooth="true"
            >
              <NavLink
                to="projects"
                offset={-80}
                spy={true}
                duration={500}
                smooth="true"
                onClick={() => setClick(false)}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem
              to="contact"
              offset={-80}
              spy={true}
              duration={500}
              smooth="true"
            >
              <NavLink
                to="contact"
                offset={-80}
                spy={true}
                duration={500}
                smooth="true"
                onClick={() => setClick(false)}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavList>
        </NavMenu>
        <NavSocials>
          <SocialLink href="https://github.com/obiito01" target="_blank">
            <FaGithub style={{ fontSize: "28px" }} />
          </SocialLink>
          <Link
            to="contact"
            spy={true}
            duration={500}
            smooth="true"
            offset={-80}
          >
            <ContactButton>Contact Me!</ContactButton>
          </Link>
        </NavSocials>
      </NavContainer>
    </StyledNav>
  );
};

export default Navbar;
