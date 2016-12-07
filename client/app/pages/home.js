import React from 'react';
import ArticleList from '../containers/articleList';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ArticleList />
      </div>
    );  
  }
} 

export default Home;
