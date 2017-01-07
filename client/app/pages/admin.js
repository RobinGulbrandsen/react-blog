import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import { getArticles } from '../actions/adminAction';
import { getArticle } from '../actions/articleAction';
import { getProjects, getProject } from '../actions/projectAction';

import { Button, Row, Col } from 'react-bootstrap';

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

  editProject(id) {
    this.props.getProject(id).then((result) => {
      hashHistory.push('forms/project');
    })
  }

  createArticle() {
    this.setState({article: null});
    hashHistory.push('forms/article');
  }

  createProject() {
    this.setState({project: null});
    hashHistory.push('forms/project');
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
        
        <Row className='table-head'>
          <Col sm={11} md={11}>
            <h4>Title</h4> 
          </Col>
          <Col sm={1} md={1}>
            <h4>Visible</h4>
          </Col>
        </Row>
        
        {this.props.articles.articles.map((article) => {
          return (
          <Row key={article.id}
               className='table-row'
               onClick={(e) => this.editArticle(article.id)}>
            <Col sm={11} md={11}>
              <p>{article.title}</p> 
            </Col>
            <Col sm={1} md={1}>
              <input type='checkbox'
                     checked={article.visible} />
            </Col>
          </Row>);
        })}
          
        <h1>
          Projects
          <Button className='btn btn-success right'>
            Create New
          </Button>
        </h1>
      
        <Row className='table-head'>
          <Col sm={12} md={12}>
            <h4>Title</h4> 
          </Col>
        </Row>
      
        {this.props.projects.map((project) => {
          return (
            <Row key={project.id}
                 className='table-row'
                 onClick={(e) => this.editProject(project.id)}>
              <Col sm={12} md={12}>
                <p>{project.title}</p> 
              </Col>
            </Row>);
        })}
      </div>
    );  
  }
} 

function mapStateToProps(state) {
  return {
    article: state.article,
    articles: state.articles,
    project: state.project,
    projects: state.projects
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    getArticle: getArticle,
    getArticles: getArticles,
    getProject: getProject,
    getProjects: getProjects
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Admin);
