import styled from "styled-components";
import { Container, Button } from "../../globalStyles";

export const Hero = styled.section`
  background-color: #667fff;
  color: white;
  height: 100vh;
  min-height: 600px;
  padding-top: 80px;
`;
export const HeroContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const HeroLeft = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: -200px;
  }

  @media (max-width: 480px) {
    margin-bottom: -200px;
    margin-bottom: -200px;
  }
`;

export const HeroLeftContent = styled.div``;
export const TopLine = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 5px;
  color: #dcdcdc;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 5px;
  letter-spacing: 1px;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #fff;
  margin-bottom: 50px;
  letter-spacing: 2px;
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

export const HeroRight = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroRightContent = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 500ms ease-in-out;
  cursor: pointer;
  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const StyledButton = styled(Button)`
  margin-bottom: 50px;
  transition: all 300ms ease-in-out;
  border-radius: 25px;
  &:hover {
    transform: scale(1.05);
  }
`;
