import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import { LinkContainer } from 'react-router-bootstrap'
import { useState } from "react";

function Header({ signedUser, submitSearch, showAll }) {

  const [searchInput, setSearchInput] = useState('');
  const [isAllShowed, setIsAllShowed] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  function handleSearch() {
    submitSearch(searchInput);
    setIsAllShowed(!searchInput);
    setIsSearchActive(!!searchInput);
  }

  return (
    <>
      <Navbar expand="lg">
      <Container className="ms-3 me-3" fluid>
          <Navbar.Brand style={{ fontFamily: 'Pacifico', fontSize: '2.5em' }} href="/">
            <Image className="me-3"
              width="70px"
              height="70px"
              src="images/frog-coffee.jpg"
              roundedCircle
            />ratte
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
              {!signedUser ? (
                <LinkContainer to="/login">
                <Button size="lg"
                  variant="light"
                >Sign In</Button>
                </LinkContainer>
              ) : (
                <LinkContainer to="/logout">
                <Button variant="outline-secondary">Sign Out</Button>
                </LinkContainer>
              )}
              </Navbar.Collapse>
                    </Container>
      </Navbar>
      <Navbar expand="lg">
      <Container className="ms-3 me-3" fluid>
      <Navbar.Collapse>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Folgers"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Button className="me-4" variant="outline-light" type="button" active={isSearchActive} onClick={handleSearch}>Search</Button>
          </Form>
          <Button variant="outline-light" className="me-2" active={isAllShowed} onClick={() => {showAll(); setIsSearchActive(false); setIsAllShowed(true)}}>Show All</Button>
                <Button variant="outline-light" className="me-2" active={false}>Best 🔥</Button>
                <Button variant="outline-light" className="me-2" active={false}>Worst 🤮</Button>
                <Button variant="outline-light" className="me-2" active={false}>Best Decaf 🌚</Button>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <LinkContainer to="/new">
                  <Button size="lg" variant="outline-warning">Add Coffee + </Button></LinkContainer>
                </Navbar.Collapse>
              </Container>
              </Navbar>
    </>
  );
}

export default Header;
