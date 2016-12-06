import React from 'react';
import { Link } from 'react-router';
import ArticleListEntry from './articleListEntry';

import { Well, Row, Col } from 'react-bootstrap';

const TopArticles = () => (
  <div>
    <ArticleListEntry />
    <ArticleListEntry />
    <ArticleListEntry />
    <Row>
      <Col sm={1} md={1}>
        <Link to='/'>Previous</Link>
      </Col>
      <Col className='pagecount' sm={10} md={10}>
        Page 1 / 3
      </Col>
      <Col sm={1} md={1}>
        <Link to='/'>Next</Link>
      </Col>
    </Row>
  </div>
);

export default TopArticles;
