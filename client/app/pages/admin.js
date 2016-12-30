import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import { getArticles } from '../actions/adminAction';
import { getArticle } from '../actions/articleAction';
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

  editArticle(id) {
    this.props.getArticle(id).then((result) => {
      hashHistory.push('forms/article');
    });
  }

  createArticle() {
    this.setState({article: null});
    hashHistory.push('forms/article');
  }

  render() {
    if (!this.props.articles || !this.props.projects) {
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
          <Button className='btn btn-success right'
                  onClick={this.createArticle.bind(this)}>
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
    article: state.article,
    articles: state.articles,
    projects: state.projects
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getArticles: getArticles,
    getProjects: getProjects,
    getArticle: getArticle
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Admin);
