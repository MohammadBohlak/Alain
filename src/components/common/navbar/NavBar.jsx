import { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../assets/images/logo/bigWhite.svg";
import { StyledNavBar, StyledNavLink, Toggler } from "./navbar.styles";
import { Link } from "react-router-dom";
import { useNavbar } from "./useNavbar";

function NavBar() {
  const { expanded, setExpanded, collapseRef, handleScrollToSection } =
    useNavbar();

  return (
    <StyledNavBar
      expand="md"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="اللوغو" />
        </Navbar.Brand>

        <Toggler
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav" ref={collapseRef}>
          <Nav>
            <StyledNavLink as={Link} to="/" onClick={() => setExpanded(false)}>
              الرئيسية
            </StyledNavLink>

            <StyledNavLink
              as={Link}
              to="/about"
              onClick={() => setExpanded(false)}
            >
              حولنا
            </StyledNavLink>

            <StyledNavLink
              as={Link}
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              تواصل معنا
            </StyledNavLink>

            <StyledNavLink onClick={() => handleScrollToSection("#services")}>
              خدماتنا
            </StyledNavLink>

            <StyledNavLink
              onClick={() => handleScrollToSection("#ourProjects")}
            >
              مشاريعنا
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  );
}

export default NavBar;
