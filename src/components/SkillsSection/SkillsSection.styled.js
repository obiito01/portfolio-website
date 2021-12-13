import styled, { keyframes } from "styled-components";
import { Container } from "../../globalStyles";

export const Skills = styled.section`
  /* height: calc(100vh - 80px); */
  min-height: calc(100vh - 80px);
  background-color: ${({ theme }) => theme.skillsSectionPrimaryColor};
  transition: ${({ theme }) => theme.transition};
`;

export const SkillsContainer = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryTextColor};
  transition: ${({ theme }) => theme.transition};
  font-size: 2.2rem;
  font-weight: 300;
  margin-bottom: 20px;
  letter-spacing: 2px;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.primaryTextColor};
  transition: ${({ theme }) => theme.transition};
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 60px;
  letter-spacing: 1px;
`;

export const Grid = styled.div`
  width: 100%;
  row-gap: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 30px;
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;
export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 300ms all ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ItemIcon = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 15px;

  @media (max-width: 1024px) {
    width: 110px;
    height: 110px;
    margin-bottom: 15px;
  }
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;
export const ItemName = styled.h2`
  color: ${({ theme }) => theme.primaryTextColor};
  transition: ${({ theme }) => theme.transition};
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
