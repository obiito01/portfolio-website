import styled from "styled-components";
import { Link } from "react-scroll";
import { Container } from "../../globalStyles";

export const StyledNav = styled.nav`
  /* background-color: #667fff; */
  background-color: ${({ scrollY }) => (!scrollY ? "transparent" : "#667fff")};
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  box-shadow: ${({ scrollY }) =>
    !scrollY ? `none` : `rgba(0, 0, 0, 0.24) 0px 3px 8px;`};
  color: black;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  margin-bottom: -80px;
  transition: all ease-in-out 300ms;
`;
export const NavContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  height: 100%;
  transition: all 300ms ease-in-out;
  &:hover {
    color: #6e00ff;
    transform: scale(1.02);
  }
`;
export const NavHamburger = styled.div`
  color: #fff;
  font-size: 2rem;
  padding-top: 7px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const NavMenu = styled.ul`
  height: 100%;
  font-weight: 300;
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: all 200ms ease-in-out;
  padding: 0 20px;
  font-size: 1.2rem;
  cursor: pointer;

  &.active {
    color: #fff;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.2rem;
      background-color: #fff;
      transition: all 200ms ease-in-out;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.2rem;
    background-color: transparent;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    color: #6e00ff;
    &::after {
      background-color: #6e00ff;
    }
  }
`;

export const NavLink = styled(Link)``;

export const NavSocials = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.3rem;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
  padding: 6px 15px 0;
  text-decoration: none;
  color: white;
  transition: 300ms all ease-in-out;

  &:hover {
    color: #6e00ff;
  }
`;
