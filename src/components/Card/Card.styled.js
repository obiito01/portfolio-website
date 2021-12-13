import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.primaryCardColor};
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 3px 12px rgb(0 0 0 / 15%);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transition};

  @media (hover: hover) {
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      transform: scale(1.02);
    }
  }

  @media (max-width: 1024px) {
    height: 400px;
    width: 95%;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const ImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const ImageLink = styled.a`
  cursor: pointer;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export const ContentContainer = styled.div`
  height: 200px;
  margin: 1rem;
  position: relative;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryButtonColor};
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: ${({ theme }) => theme.transition};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 0.95rem;
  font-weight: 300;
  margin-bottom: 30px;
  transition: ${({ theme }) => theme.transition};

  @media (max-width: 768px) {
    letter-spacing: 0.3px;
    font-size: 0.95rem;
  }
  @media (max-width: 480px) {
    letter-spacing: 0px;
    font-size: 0.9rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Link = styled.a`
  padding: 5px 15px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.primaryButtonColor};
  white-space: nowrap;
  color: ${({ theme }) => theme.primaryButtonTextColor};
  cursor: pointer;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    opacity: 0.6;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
