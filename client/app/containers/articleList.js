import React from 'react';
import {bindActionCreators} from 'redux';
import { hashHistory } from 'react-router';
import {connect} from 'react-redux';
import {getArticles} from '../actions/articleAction';

import ArticleListEntry from './articleListEntry';

import { Well, Row, Col, Button } from 'react-bootstrap';

class Articles extends React.Component {
  constructor(props) {
    super(props);

    this.page = 1;
  }

  componentDidMount() {
    this.props.getArticles(this.page);  
  }

  togglePrev() {
    this.props.getArticles(--this.page);
  }

  toggleNext() {
    this.props.getArticles(++this.page);
  }

  render () {
    if (!this.props.articles) {
      return (
        <h1>Loading... please wait</h1>
      );
    }

    return (
      <div>
        {this.props.articles.map((article) => {
          return <ArticleListEntry key={article.id} 
                                   article={article}/>
        })}

        <Row>
          <Col sm={2} md={2}>
            {(this.page > 1) ? <Button bsStyle='link' onClick={this.togglePrev.bind(this)}>Previous</Button> : null}
          </Col>
          <Col className='pagecount' sm={8} md={8}>
            Page {this.page} / {Math.floor(this.props.totalSize / 3) + 1}
          </Col>
          <Col sm={2} md={2}>
            {(this.page < (Math.floor(this.props.totalSize / 3) + 1))
              ? <Button bsStyle='link' onClick={this.toggleNext.bind(this)}>Next</Button>
              : null }
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: (state.articles && state.articles.articles) ? state.articles.articles : null,
    totalSize: (state.articles && state.articles.totalSize) ? (state.articles.totalSize) : 1,
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({getArticles: getArticles}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Articles);
