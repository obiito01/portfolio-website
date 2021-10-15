import React, { useState, useEffect, useRef } from "react";
import { Container, Text } from "./Confirmation.styled";

const Confirmation = ({ confirmationOpen, setConfirmationOpen }) => {
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setConfirmationOpen(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [confirmationOpen]);

  return (
    <Container open={confirmationOpen}>
      <Text>Email sent successfully.</Text>
    </Container>
  );
};

export default Confirmation;
