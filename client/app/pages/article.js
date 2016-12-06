import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mounted');
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
        <p><span className='glyphicon glyphicon-time'></span>
        {this.props.article.createdAt}
        </p>
        <hr />
        <p>
          {this.props.article.content}
        </p>
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
    return {};
}

export default connect(mapStateToProps, matchDispatchToProps)(Article);
