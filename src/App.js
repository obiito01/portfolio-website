import React, { useState } from "react";
import GlobalStyle, { themes } from "./globalStyles";
import {
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Confirmation,
} from "./components";
import { ThemeProvider } from "styled-components";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle />
      <Navbar currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />

      <ProjectsSection />

      <ContactSection
        confirmationOpen={confirmationOpen}
        setConfirmationOpen={setConfirmationOpen}
      />
      <Confirmation
        confirmationOpen={confirmationOpen}
        setConfirmationOpen={setConfirmationOpen}
      />
    </ThemeProvider>
  );
}

export default App;
