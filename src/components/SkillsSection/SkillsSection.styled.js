import styled, { keyframes } from "styled-components";
import { Container } from "../../globalStyles";

export const Skills = styled.section`
  height: calc(100vh - 80px);
  min-height: 800px;
  background-color: #f8f9f9;
`;

export const SkillsContainer = styled(Container)`
  padding: 30px 0;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const colorchange = keyframes`
 0% { }
50%{
  transform:scale(1.3)
}
 100% {transform:scale(1)}
`;
export const Title = styled.h1`
  color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  padding: 40px 0;
  font-weight: 400;
  animation: ${colorchange} 10s infinite alternate;
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

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
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
  width: 130px;
  height: 130px;
  object-fit: cover;
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
    margin-bottom: 0;
  }
`;
export const ItemName = styled.h2`
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
