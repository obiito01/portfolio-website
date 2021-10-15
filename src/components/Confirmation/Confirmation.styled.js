import styled from "styled-components";
import { GiConfirmed } from "react-icons/gi";

export const Container = styled.div`
  background-color: lightgreen;
  border-radius: 25px;
  height: 50px;
  width: 300px;
  position: fixed;
  left: 80%;
  top: 150px;
  transform: translate(-50%, -50%);

  z-index: 1000;
  padding: 10px 30px;
  opacity: ${({ open }) => (open ? `0.8` : `0`)};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 500ms all ease-in-out;

  @media (max-width: 1024px) {
    left: 50%;
  }
`;

export const Text = styled.h3`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
`;
