import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import dateFormat from '../util/timeFormat';

import { Row } from 'react-bootstrap';

class ArticleListEntry extends React.Component {

  constructor(props) {
    super(props);
    
    console.log('hello');
    console.log(this.props.article);
    this.time = dateFormat(this.props.article.createdAt);
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
            <span> {this.time}</span>
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
