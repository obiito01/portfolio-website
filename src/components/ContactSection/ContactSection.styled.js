import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Contact = styled.section`
  position: relative;
  height: calc(100vh - 80px);
  min-height: 700px;
  background-color: #9fafff;
`;

export const ContactContainer = styled(Container)`
  min-height: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactFormContainer = styled.div`
  background-color: white;
  min-height: 600px;
  height: 70%;
  width: 95%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 50px;
  background-color: #667fff;
`;

export const ContentLeft = styled.div`
  display: grid;
  place-items: center;
  background-color: #667fff;
  flex: 2;
  border-radius: 25px;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 90%;
`;

export const SuccessImage = styled.img`
  width: 50%;
  margin-bottom: 30px;
`;
export const SuccessMessage = styled.p`
  font-size: 1.2rem;
  font-family: "Varela Round", sans-serif;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 3;
  border-radius: 25px;
  background-color: #fff;
`;
export const ContactForm = styled.form`
  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;
export const Title = styled.h1`
  margin: ${({ error }) => (error ? `0 0 2px` : `0 0 20px`)};
  font-family: "Varela Round", sans-serif;
  width: 100%;
  text-align: left;
`;
export const Subtitle = styled.p`
  margin: ${({ error }) => (error ? `0 0 10px` : `0 0 0px`)};
  font-family: "Varela Round", sans-serif;
  font-size: 1rem;
  width: 100%;
  text-align: left;
  color: red;
  display: ${({ error }) => (error ? `block` : `none`)};
`;
export const Input = styled.input`
  margin-bottom: 10px;
  background-color: #edf6ff;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  padding: 0 25px;
  font-family: "Varela Round", sans-serif;
  font-size: 1rem;
  transition: 200ms all ease-in-out;
  border: ${({ empty }) => (empty ? "red solid 1px" : "none")};

  &:focus {
    background-color: #c9e2fb;
  }
`;

export const TextArea = styled.textarea`
  margin-bottom: 30px;
  resize: none;
  height: 14em;
  width: 100%;
  background-color: #edf6ff;
  border: none;
  border-radius: 25px;
  padding: 25px 25px;
  overflow: hidden;
  font-family: "Varela Round", sans-serif;
  font-size: 1rem;
  transition: 200ms all ease-in-out;
  border: ${({ empty }) => (empty ? "red solid 1px" : "none")};

  &:focus {
    background-color: #c9e2fb;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 50px;
  background-color: #667fff;
  color: white;
  font-size: 1.1rem;
  font-family: "Varela Round", sans-serif;
  transition: all 400ms ease-in-out;

  &:hover {
    background-color: #6e00ff;
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
