import React from 'react';
import ArticleList from '../containers/articleList';

import { Col } from 'react-bootstrap';

import AboutMeSmall from '../containers/aboutMeSmall';
import TopArticles from '../containers/topArticles';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Col sm={12} md={8}>
          <ArticleList />
        </Col>
        <Col sm={12} md={4}>
          <AboutMeSmall />
          <TopArticles />
        </Col>
      </div>
    );  
  }
} 

export default Home;
