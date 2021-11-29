import styled from "styled-components";
import { Container } from "../../globalStyles";
import { BsDownload, BsGithub } from "react-icons/bs";

export const ColorSpan = styled.span`
  color: ${({ color }) => color};
  font-weight: ${({ fw }) => fw};
`;

export const About = styled.section`
  position: relative;
  height: calc(100vh - 80px);
  min-height: 800px;
  background-color: #eaecee;
`;

export const AboutContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Content = styled.div`
  padding: 25px 0;
  height: 100%;
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContentLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 10px;
    height: 50%;
  }
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;
export const ContentRight = styled.div`
  padding: 100px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media (max-width: 768px) {
    padding: 0 10px;
    height: 50%;
    text-align: center;
  }
`;

export const TopLine = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 5px;
  color: #808080;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 5px;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 5px;
  }
`;
export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 10px;
  letter-spacing: 1px;
  @media (max-width: 1024px) {
    font-size: 1.7rem;
    margin-bottom: 5px;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0px;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0px;
  }
`;
export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 50px;
  letter-spacing: 1px;
  @media (max-width: 1024px) {
    font-size: 1.7rem;
  }
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;
export const Paragraph = styled.p`
  margin-bottom: 40px;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 1px;
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;
export const Image = styled.img`
  width: 90%;
  height: 90%;
  transition: 300ms all ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const ButtonControl = styled.div`
  display: flex;

  width: 90%;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: #667fff;
  color: white;
  font-size: 1.4rem;
  font-family: "Varela Round", sans-serif;
  transition: all 300ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: #6e00ff;
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 130px;
    height: 40px;
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    width: 100px;
    height: 40px;
    font-size: 1rem;
    margin: 0 8px;
  }
`;

export const DownloadIcon = styled(BsDownload)`
  font-size: 1.4rem;
  margin-right: 10px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
export const GithubIcon = styled(BsGithub)`
  font-size: 1.4rem;
  margin-right: 10px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
