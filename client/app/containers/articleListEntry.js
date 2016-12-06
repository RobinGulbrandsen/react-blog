import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import { Row } from 'react-bootstrap';

class ArticleListEntry extends React.Component {
  render() {
    return (<div className='article'>
      <Row>
        <h2>
          {this.props.article.title}
        </h2>
        <p>
          <span className="glyphicon glyphicon-time"> </span>
          {this.props.article.createdAt}
        </p>
        <p className="bold">
          {this.props.article.intro}
        </p>
        <Link to={'article?id=' + this.props.article.titleId}>Read More</Link>
        <hr />
      </Row>
    </div>);
  }
}

export default ArticleListEntry;
