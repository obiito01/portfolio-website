import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Projects = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  background-color: ${({ theme }) => theme.projectSectionPrimaryColor};
  transition: ${({ theme }) => theme.transition};
  @media (max-width: 1024px) {
    padding: 50px 0;
    height: auto;
    min-height: 900px;
  }
`;

export const ProjectsContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px 20px;
`;
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 2px;
  width: 100%;
  color: ${({ theme }) => theme.primaryTextColor};
  transition: ${({ theme }) => theme.transition};

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const Content = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const Description = styled.p`
  width: 100%;
  margin-bottom: 50px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 300;
  color: ${({ theme }) => theme.primaryTextColor};
  transition: ${({ theme }) => theme.transition};
  @media (max-width: 1024px) {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

export const GithubLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryButtonColor};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    text-decoration: underline;
  }
`;
