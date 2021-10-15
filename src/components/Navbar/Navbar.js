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
        <NavMenu>
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
            >
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
        <NavSocials>
          <SocialLink href="https://instagram.com/jethroau" target="_blank">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="https://github.com/obiito01" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </SocialLink>
        </NavSocials>
      </NavContainer>
    </StyledNav>
  );
};

export default Navbar;
