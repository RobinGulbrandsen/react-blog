import React from 'react';

import { Grid,
         Row,
         Col } from 'react-bootstrap';

const About = () => (
  <div>
    <h1> About the Author</h1>
      <Row>
        <Col sm={12} md={8}>
          <p>
            I'm an energeic and dedicated developer with an in-depth knowledge of Java enterprise applications. During my time as a developer, I've had the pleasure of working with a lot of different technologies, solving a varieaty of challenges. I'm also a developer with knowledge of all the different states of a project, from idea, to implementation and maintaining the software after deployment.
          </p>
          <p>
            I have experience with Java, Node, .NET and PHP applications. Though, I prefer to work with Node and Java. I believe that the right tool for a task is just as important as the solution itself.
          </p>
          <blockquote>Find the right tool, and the solution will present itself.</blockquote>
        </Col>
        <Col sm={12} md={4}>
          <img src="http://rgulbrandsen.com/assets/profile.jpg" alt="Image of the Autor"/>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12}>
          <h2>Core Knowledge</h2>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12}>
          <h2>Previous Experience</h2>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12}>
          <h2>Social Media</h2>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={12}>
          <h2>Contact</h2>
        </Col>
      </Row>
  </div>
);

export default About;
