  import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import staticText from '../util/static';
import { getProjects } from '../actions/projectAction';
import { toMonth, pastDate } from '../util/timeFormat';

import { Grid,
         Row,
         Col } from 'react-bootstrap';

import logoStackoverflow from '../../assets/images/stackoverflow.png';
import logoGithub from '../../assets/images/github-logo.png';
import logoLinkedin from '../../assets/images/LinkedIn_Logo.png';
import imageMe from '../../assets/images/me.jpg';


import AboutMeSmall from '../containers/aboutMeSmall';
import TopArticles from '../containers/topArticles';

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const projects = this.props.projects || [];

    return (
      <div>
        <Col sm={12} md={8}>
          <h1> About the Author</h1>
          <Row>
            <Col xs={12}>
              <img className='pull-right author-image' src={imageMe} alt='Image of the Author' />
              <p>
                {staticText.about.me1}
                <br/>
                {staticText.about.me2}
              </p>
              <blockquote>{staticText.about.quote}</blockquote>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12}>
              <h2>Experience</h2>
              {projects.map((project) => {
                return (
                  <div key={project.id}>
                    <h4>
                      {project.title}
                      <span>
                        <small className='project-start-end'>
                          {toMonth(project.startDate)} - {pastDate(project.endDate)}
                        </small>
                      </span>
                    </h4>
                    <p className='project-description'>{project.description}</p>
                  </div>
                );
              })}

            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12}>
              <h2>Social Media</h2>
              <Row>
                <Col xs={4} sm={4} md={4}>
                  <a href='http://stackoverflow.com/users/1815544/r-gulbrandsen'>
                    <img src={logoStackoverflow} alt='logo Stackoverflow' />
                  </a>
                </Col>
                <Col xs={4} sm={4} md={4}>
                  <a href='https://no.linkedin.com/in/robin-gulbrandsen'>
                    <img src={logoGithub} alt='logo Github' />
                  </a>
                </Col>
                <Col xs={4} sm={4} md={4}>
                  <a href='http://stackoverflow.com/users/1815544/r-gulbrandsen'>
                    <img src={logoLinkedin} alt='logo Linkedin' />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12}>
              <h2>Contact</h2>
              <p>Feel free to contact me at: robin@123.no</p>
            </Col>
          </Row>
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
    projects: state.projects
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({ getProjects: getProjects }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(About);
