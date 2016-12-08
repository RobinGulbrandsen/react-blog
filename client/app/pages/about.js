import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import staticText from '../util/static';
import { getProjects } from '../actions/projectAction';
import { toMonth } from '../util/timeFormat';

import { Grid,
         Row,
         Col } from 'react-bootstrap';

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
        <h1> About the Author</h1>
        <Row>
          <Col sm={12} md={8}>
            <p>
              {staticText.about.me1}
            </p>
            <p>
              {staticText.about.me2}
            </p>
            <blockquote>{staticText.about.quote}</blockquote>
          </Col>
          <Col sm={12} md={4}>
            <img src="http://rgulbrandsen.com/assets/profile.jpg" alt="Image of the Autor"/>
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
                        {toMonth(project.startDate)} - {toMonth(project.endDate)}
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
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={12}>
            <h2>Contact</h2>
          </Col>
        </Row>
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
