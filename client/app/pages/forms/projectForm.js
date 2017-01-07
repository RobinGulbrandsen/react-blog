import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { toDate } from '../../util/timeFormat';
import { toMonth, pastDate } from '../../util/timeFormat';

import { addProject } from '../../actions/projectAction';

class ArticleForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      project: {
        title: '',
        description: '',
        startedAt: undefined,
        endedAt: undefined
      },
      create: true
    };
  }

  componentDidMount() {
    if (this.props.project) {
      this.setState({create: false});
      this.setState({project: this.props.project});
    }
  }

  handleChangeTitle(event) {
    this.state.project.title = event.target.value;
    this.setState({project: this.state.project});
  }

  handleChangeStartedAt(event) {
    this.state.project.startDate = event.target.value;
    this.setState({project: this.state.project});
  }

  handleChangeEndedAt(event) {
    this.state.project.endDate = event.target.value;
    this.setState({project: this.state.project});
  }

  handleChangeDescription(event) {
    this.state.project.description = event.target.value;
    this.setState({project: this.state.project});
  }

  cancelForm() {
    hashHistory.push('admin');
  }

  createOrUpdate() {
    addProject(this.state.project).then((res) => {
      hashHistory.push('admin');
    });
  }

  createMarkup() {
    return {__html: this.state.article.content};
  }

  render() {
    return (
      <div>
        <div className='form-horizontal'>
          <fieldset>
            <legend>Project</legend>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>Title</label>
              <div className='col-lg-11'>
                <input type='text'
                       className='form-control'
                       value={this.state.project.title}
                       onChange={this.handleChangeTitle.bind(this)}
                       placeholder='Title...' />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>Started At</label>
              <div className='col-lg-11'>
                <input type='date'
                       className='form-control'
                       value={this.state.project.startedAt}
                       onChange={this.handleChangeStartedAt.bind(this)} />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>Finished At</label>
              <div className='col-lg-11'>
                <input type='date'
                       className='form-control'
                       value={this.state.project.endedAt}
                       onChange={this.handleChangeEndedAt.bind(this)} />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>Description</label>
              <div className='col-lg-11'>
                <textarea className='form-control'
                          rows='3'
                          value={this.state.project.description}
                          onChange={this.handleChangeDescription.bind(this)}>
                </textarea>
              </div>
            </div>
            <div className='form-group'>
              <div className='col-lg-11 col-lg-offset-1'>
                <button className='btn btn-default'
                        onClick={this.cancelForm.bind(this)}>
                  Cancel
                </button>
                <button className='btn btn-primary'
                        onClick={this.createOrUpdate.bind(this)}>
                  Save
                </button>
              </div>
            </div>
          </fieldset>
        </div>

        <hr />

        <h4>
          {this.state.project.title}
          <span>
            <small className='project-start-end'>
              {toMonth(this.state.project.startDate)} - {pastDate(this.state.project.endDate)}
            </small>
          </span>
        </h4>
        <p className='project-description'>{this.state.project.description}</p>
      
      </div>
    );  
  }
} 

function mapStateToProps(state) {
  return {
    project: state.project
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ArticleForm);
