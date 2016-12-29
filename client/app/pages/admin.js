import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getArticles } from '../actions/adminAction';
import { getProjects } from '../actions/projectAction';

import { Button } from 'react-bootstrap';

class Admin extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getArticles();
    this.props.getProjects();
  }

  editArticle(id, e) {
    console.log('id', id);
  }

  render() {
    if (!this.props.articles) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>
          Articles 
          <Button className='btn btn-success right'>
            Create New
          </Button>
        </h1>
        <div className='table panel panel-default'>
          {this.props.articles.articles.map((article) => {
            return (
            <p key={article.id}
               className='table-row'
               onClick={(e) => this.editArticle(article.id)}>
              {article.title}
            </p>);
          })}
        </div>
        <h1>
          Projects
          <Button className='btn btn-success right'>
            Create New
          </Button>
        </h1>
        <div className='table panel panel-default'>
          {this.props.projects.map((project) => {
            return (
              <p className='table-row'
                 key={project.id}>
                {project.title}
              </p>);
          })}
        </div>
      </div>
    );  
  }
} 

function mapStateToProps(state) {
  return {
    articles: state.articles,
    projects: state.projects
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getArticles: getArticles,
    getProjects: getProjects
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Admin);
