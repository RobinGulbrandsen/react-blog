import React from 'react';
import { Link } from 'react-router';

import { Row } from 'react-bootstrap';

const ArticleListEntry = () => (
  <div className='article'>
    <Row>
      <h2>
        Title of the Article
      </h2>
      <p>
        <span className="glyphicon glyphicon-time"> </span>
        Desember 5th 2016
      </p>
      <p className="bold">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentia
      </p>
      <Link to='article'>Read More</Link>
      <hr />
    </Row>
  </div>
);

export default ArticleListEntry;
