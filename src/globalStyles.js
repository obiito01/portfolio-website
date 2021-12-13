import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family:'Roboto', sans-serif;
  }

  
  ::-webkit-scrollbar {
  width:0.5rem;
  background-color: ${({ theme }) => theme.scrollbarTrackColor};
  
  }

::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.scrollbarTrackColor};
  border-radius:100vw; 
  
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.scrollbarThumbColor};
  border-radius:100vw;
  
}

`;

const lightTheme = {
  primaryColor: "#667fff",
  secondaryColor: "#6e00ff",
  primaryTextColor: "black",
  secondaryTextColor: "white",
  primarySwitchColor: "white",
  primaryButtonColor: "#667fff",
  secondaryButtonColor: "#6e00ff",
  primaryButtonTextColor: "white",
  scrollbarTrackColor: "#fff",
  scrollbarThumbColor: "#667fff",
  aboutSectionPrimaryColor: "#eaecee",
  skillsSectionPrimaryColor: "#f8f9f9",
  projectSectionPrimaryColor: "#f8f9f9",
  contactSectionPrimaryColor: "#9fafff",
  contactSectionInputColor: "#edf6ff",
  contactSectionInputFocusColor: "#c9e2fb",
  contactFormColor: "#fff",
  primaryCardColor: "white",
  transition: "all 500ms ease-in-out",
  hamburgerColor: "#fff",
};
const darkTheme = {
  primaryColor: "#2a2a2a",
  secondaryColor: "#FFD369",
  primaryTextColor: "#fff",
  secondaryTextColor: "#000",
  primarySwitchColor: "#FFD369",
  primaryButtonColor: "#ffd369",
  secondaryButtonColor: "#ffd369",
  primaryButtonTextColor: "#2a2a2a",
  scrollbarTrackColor: "#2a2a2a",
  scrollbarThumbColor: "#e0e0e0",
  aboutSectionPrimaryColor: "#3b3b3b",
  skillsSectionPrimaryColor: "#2a2a2a",
  projectSectionPrimaryColor: "#3b3b3b",
  contactSectionPrimaryColor: "#2a2a2a",
  contactSectionInputColor: "#3b3b3b",
  contactSectionInputFocusColor: "#3b3b3b",
  contactFormColor: "#2a2a2a",
  primaryCardColor: "#2a2a2a",
  transition: "all 500ms ease-in-out;",
  hamburgerColor: "#ffd369",
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const Container = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
`;

export const Button = styled.button`
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? "#6e00ff" : "#6e00ff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: ${({ primary }) => (primary ? "#101522" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: #fff;
    background-color: ${({ primary }) => (primary ? "#0467fb" : "#4b5nf7")};
    color: ${({ primary }) => (primary ? "#fff" : "#6e00ff")};
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;

export default GlobalStyle;
