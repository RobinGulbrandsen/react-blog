import React from 'react';
import { Link } from 'react-router';

import { Well } from 'react-bootstrap';

const AboutMeSmall = () => (
  <div>
    <Well>
      <h3>About the Author</h3>
      <p>
        Java and web developer with passion for software and innovative solutions. 
        This blog is a playground for testing technology, sharing thoughts and saving concepts
      </p>
      <Link to='about'>Read More</Link>
    </Well>
  </div>
);

export default AboutMeSmall;
