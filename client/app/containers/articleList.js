import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import ArticleListEntry from './articleListEntry';

import { Well, Row, Col } from 'react-bootstrap';

class Articles extends React.Component {
  render () {
    return (
      <div>
        {this.props.articles.map((article) => {
          return <ArticleListEntry key={article.titleId} 
                                   article={article}/>
        })}

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
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function matchDispatchToProps(dispatch){
  return {};
}

export default connect(mapStateToProps, matchDispatchToProps)(Articles);
