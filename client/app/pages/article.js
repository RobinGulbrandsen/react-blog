import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getArticle} from '../actions/articleAction';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.location.query.id;
  }

  componentDidMount() {
    this.props.getArticle();
  }

  createMarkup() {
    return {__html: this.props.article.content};
  }

  render() {
    if (!this.props.article) {
      return (
        <div>
          <h1>Loading.. please wait</h1>
        </div>
      );
    }

    return (
      <div>
        <h1>{this.props.article.title}</h1>
        <p>
          <span className='glyphicon glyphicon-time'> </span>
          {this.props.article.createdAt}
        </p>
        <hr />
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
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
