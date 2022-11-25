import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { TitleContainer, SectionHome, SubTitle, Title, ImageContainer } from "./homeStyled";

export const Home = () => {
  return (
    <SectionHome>
      <Navbar/>
      <TitleContainer>
        <Title>Hola soy Gines Punti</Title>
        <SubTitle>Junior Front-End Developer 👨‍💻</SubTitle>
      </TitleContainer>
      <ImageContainer>
        
      </ImageContainer>
    </SectionHome>
  );
};
