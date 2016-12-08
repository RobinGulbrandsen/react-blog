import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { toDate } from '../util/timeFormat';

import { Row } from 'react-bootstrap';

class ArticleListEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='article'>
        <Row>
          <h2>
            {this.props.article.title}
          </h2>
          <p>
            <span className="glyphicon glyphicon-time"></span>
            <span> {toDate(this.props.article.createdAt)}</span>
          </p>
          <p className="bold">
            {this.props.article.intro}
          </p>
          <Link to={'article/' + this.props.article.id}>Read More</Link>
          <hr />
        </Row>
      </div>
    );
  }
}

export default ArticleListEntry;
