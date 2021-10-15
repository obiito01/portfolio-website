import React, { useState } from "react";
import GlobalStyle from "./globalStyles";
import {
  Navbar,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Confirmation,
} from "./components";

function App() {
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Navbar />
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
    </>
  );
}

export default App;
