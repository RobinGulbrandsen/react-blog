import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Navbar,
         Nav,
         NavItem,
         Grid,
         Row,
         Col } from 'react-bootstrap';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#/'>RobinGulbrandsen</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to='home'>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to='about'>
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
              <LinkContainer to='admin'>
                <NavItem eventKey={3}>Admin</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Grid>
          <Row>
            {this.props.children}
          </Row>
        </Grid>
      </div>
    );
  }
};