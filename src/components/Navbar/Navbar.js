import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
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
} from "./Navbar.styled";
import { Link } from "react-scroll";

const Navbar = () => {
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

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
  }, []);

  return (
    <StyledNav scrollY={scrollY}>
      <NavContainer>
        <NavLogo to="/" spy={true} duration={500} smooth="true">
          <Link to="/" spy={true} duration={500} smooth="true">
            &lt;jethroau /&gt;
          </Link>
        </NavLogo>
        <NavHamburger onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </NavHamburger>
        <NavMenu click={click} onClick={() => setClick(false)}>
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
