import React from "react";
import {
  StyledCard,
  ImageContainer,
  ImageLink,
  Image,
  ContentContainer,
  Title,
  Description,
  LinkContainer,
  Link,
} from "./Card.styled";

const Card = ({ image, title, description, link, repo }) => {
  return (
    <StyledCard>
      <ImageContainer>
        <ImageLink href={link} target="_blank">
          <Image src={image} />
        </ImageLink>
      </ImageContainer>
      <ContentContainer>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <LinkContainer>
          <Link href={link} target="_blank">
            Live
          </Link>
          <Link href={repo} target="_blank">
            Repo
          </Link>
        </LinkContainer>
      </ContentContainer>
    </StyledCard>
  );
};

export default Card;
