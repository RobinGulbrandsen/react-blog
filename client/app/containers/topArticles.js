import React from 'react';
import { Link } from 'react-router';

import { Well } from 'react-bootstrap';

const TopArticles = () => (
  <div>
    <Well>
      <h3>Top Articles</h3>
      <ul>
        <li><Link to='about'>Read More</Link></li>
        <li><Link to='about'>Read More</Link></li>
        <li><Link to='about'>Read More</Link></li>
        <li><Link to='about'>Read More</Link></li>
        <li><Link to='about'>Read More</Link></li>
      </ul>
    </Well>
  </div>
);

export default TopArticles;
