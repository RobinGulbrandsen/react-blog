import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getArticles } from '../actions/adminAction';

class Admin extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getArticles(Number.MAX_SAFE_INTEGER); 
  }

  render() {
    return (
      <div>
        <h1>Admin!</h1>
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
  return bindActionCreators({getArticles: getArticles}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Admin);
