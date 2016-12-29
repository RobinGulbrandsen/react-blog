import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getArticle } from '../actions/articleAction';
import { toDate } from '../util/timeFormat';


import { Navbar,
         Nav,
         NavItem,
         Grid,
         Row,
         Col } from 'react-bootstrap';

import AboutMeSmall from '../containers/aboutMeSmall';
import TopArticles from '../containers/topArticles';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.params.id;
  }

  componentDidMount() {
    this.props.getArticle(this.id);
  }

  createMarkup() {
    return {__html: this.props.article.content};
  }

  render() {
    if (!this.props.article) {
      return (
        <div>
          <Row>
            <h1 className='center'>Loading.. please wait</h1>
          </Row>
        </div>
      );
    }

    return (
      <div>
        <Col sm={12} md={8}>
          <h1>{this.props.article.title}</h1>
          <p>
            <span className='glyphicon glyphicon-time'> </span>
            <span> {toDate(this.props.article.createdAt)}</span>
          </p>
          <p className="bold">
            {this.props.article.intro}
          </p>
          <hr />
          <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        </Col>
        <Col sm={12} md={4}>
          <AboutMeSmall />
          <TopArticles />
        </Col>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    article: state.article
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({getArticle: getArticle}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Article);
