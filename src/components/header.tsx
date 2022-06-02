import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { AppContext } from '../state/AppContext';
import NotLoggedIn from './identity/notLoggedIn';
import LoggedIn from './identity/loggedIn';

function Header() {

  let appState = useContext(AppContext);

  if (appState.token != "") {
    return (
      <Container>
        <div className="row no-gutters">
          <Row>
            <Col>
              <div className="d-flex justify-content-start">
                <NavLink to="/">
                  WebApp
                </NavLink>
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-end">
                <LoggedIn></LoggedIn>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
  if (appState.token == "") {
    return (
      <Container>
        <div className="row no-gutters">
          <Row>
            <Col>
              <div className="d-flex justify-content-start">
                <NavLink to="/">
                  WebApp
                </NavLink>
              </div>
            </Col>
            <Col>
              <div className="d-flex justify-content-end">
                <NotLoggedIn></NotLoggedIn>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }

  return (<></>);
}

export default Header;
