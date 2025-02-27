import React, { useState } from "react";
import Logo from "../../components/common/Logo/Logo";
import { StyledAbout } from "./about.styles";
import { Button, Card, Container, Nav } from "react-bootstrap";
import Stats from "../../components/aboutPageComponents/Stats/Stats";
import WhoUs from "../../components/aboutPageComponents/WhoUs";
import Mission from "../../components/aboutPageComponents/mission/Mission";
import OurTeam from "../../components/aboutPageComponents/ourTeam/OurTeam";
// import TimelineSection from "../../components/aboutPageComponents/timeLine/TimelineSection";
import { Title, Meta, Link, HeadProvider } from "react-head";
import Footer from "../../components/common/footer/Footer";
import NavBar from "../../components/common/navbar/NavBar";
import GlobalStyles from "../../styles/GlobalStyles";

function About(props) {
  return (
    <HeadProvider>
      <GlobalStyles />
      <NavBar />
    <>
      <Title>تاريخنا | مؤسسة العين الحديثة</Title>
      <Meta property="og:title" content="خبرة 15 عامًا في المقاولات" />
      <Link rel="canonical" href="/about" />

      <Container>
        <StyledAbout>
          <Logo color="blue" />
          <WhoUs />
          <Mission />
          <Stats />
          <OurTeam />
        </StyledAbout>
      </Container>
    </>
    <Footer />
    </HeadProvider>
  );
}

export default About;
