import styled from "styled-components";
import { Link } from "react-scroll";
import { Container } from "../../globalStyles";

export const StyledNav = styled.nav`
  background-color: ${({ theme, scrollY }) =>
    !scrollY ? "transparent" : theme.primaryColor};
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  box-shadow: ${({ scrollY }) =>
    !scrollY ? `none` : `rgba(0, 0, 0, 0.24) 0px 3px 8px;`};
  color: #fff;
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
  transition: ${({ theme }) => theme.transition};
`;
export const NavContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 25px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  flex: 1;
`;

export const LogoText = styled.h1`
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 300;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const SwitchCircle = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.primarySwitchColor};
  transition: 300ms all ease-in-out;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 3px;
    bottom: 2px;
    background-color: ${({ theme }) => theme.primaryColor};
    transition: 300ms all ease-in-out;
    border-radius: 50%;
  }
`;

export const ThemeSwitch = styled.label`
  border-radius: 50px;
  background-color: white;
  height: 30px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin: 0 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${SwitchCircle}:before {
      left: 30px;
      background-color: ${({ theme }) => theme.primaryColor};
    }
  }
`;

export const NavHamburger = styled.div`
  color: ${({ theme }) => theme.hamburgerColor};
  font-size: 2rem;
  padding-top: 7px;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  height: 100%;
  font-weight: 300;
  display: flex;
  align-items: center;
  transition: transform 300ms ease-in-out;
  flex: 1;

  @media screen and (max-width: 768px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 80px;
    left: 0;
    height: 270px;
    width: 100vw;
    background-color: ${({ theme }) => theme.primaryColor};
    transition: ${({ theme }) => theme.transition};
    transform: ${({ click }) =>
      click ? `translateX(0)` : `translateX(-100vw)`};
    box-shadow: rgba(0, 0, 0, 0.35) 0 8px 6px -6px;
  }
`;

export const NavList = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
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
  color: #fff;
  transition: ${({ theme }) => theme.transition};
  @media screen and (max-width: 768px) {
    padding: 0 0;
  }

  &.active {
    color: ${({ theme }) => theme.secondaryColor};
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.secondaryColor};
      transition: all 200ms ease-in-out;
      @media screen and (max-width: 768px) {
        background-color: transparent;
      }
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
    color: ${({ theme }) => theme.secondaryColor};
    &::after {
      background-color: ${({ theme }) => theme.secondaryColor};
      @media screen and (max-width: 768px) {
        background-color: transparent;
      }
    }
  }
`;

export const NavLink = styled(Link)``;

export const NavSocials = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1.3rem;
  flex: 1;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
  padding: 6px 15px 0;
  text-decoration: none;
  color: #fff;
  transition: 300ms all ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const ContactButton = styled.button`
  cursor: pointer;
  padding: 13px 18px;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondaryButtonColor};
  color: ${({ theme }) => theme.primaryButtonTextColor};
  letter-spacing: 1px;
  transition: ${({ theme }) => theme.transition};
  font-size: 0.9rem;
  font-weight: 400;
  &:hover {
    color: #3b3b3b;
    background-color: #fff;
  }
`;
