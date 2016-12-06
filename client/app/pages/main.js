import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar,
         Nav,
         NavItem,
         Grid,
         Row,
         Col } from 'react-bootstrap';

import AboutMeSmall from '../containers/aboutMeSmall';
import TopArticles from '../containers/topArticles';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">RobinGulbrandsen</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="home">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="about">
                <NavItem eventKey={1}>About</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={12} md={8}>
              {this.props.children}
            </Col>
            <Col sm={12} md={4}>
              <AboutMeSmall />
              <TopArticles />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};