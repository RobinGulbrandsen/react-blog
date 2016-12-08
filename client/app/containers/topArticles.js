import React from 'react';
import {bindActionCreators} from 'redux';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getTopArticles, getArticle } from '../actions/articleAction';

import { Well } from 'react-bootstrap';

class TopArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTopArticles();  
  }

  navigateToArticle(article) {
    this.props.getArticle(article.id);
    hashHistory.push('article/' + article.id);
  }

  render() {
    if (!this.props.topArticles) {
      return (<Well><h3>Top Articles</h3></Well>);
    }

    return (
      <div>
        <Well>
          <h3>Top Articles</h3>
          <ul>
            {this.props.topArticles.map((article) => {
              return (
                <li className='menu-list' key={article.id}>
                  <Link onClick={() => { this.navigateToArticle(article)}}>
                    {article.article.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </Well>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    topArticles: state.topArticles
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({getTopArticles: getTopArticles,
                             getArticle: getArticle}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(TopArticles);
