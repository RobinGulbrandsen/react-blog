import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { toDate } from '../../util/timeFormat';

import { addArticle } from '../../actions/articleAction';

class ArticleForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      article: {
        id: '',
        title: '',
        createdAt: undefined,
        visible: false,
        intro: '',
        content: ''
      },
      create: true
    };
  }

  componentDidMount() {
    if (this.props.article) {
      this.setState({create: false});
      this.setState({article: this.props.article});
    }
  }

  handleChangeId(event) {
    this.state.article.id = event.target.value;
    this.setState({article: this.state.article});
  }

  handleChangeTitle(event) {
    this.state.article.title = event.target.value;
    this.setState({article: this.state.article});
  }

  handleChangeCreatedAt(event) {
    this.state.article.createdAt = event.target.value;
    this.setState({article: this.state.article});
  }

  handleChangeVisible(event) {
    this.state.article.visible = !this.state.article.visible;
    this.setState({article: this.state.article});
  }

  handleChangeIntro(event) {
    this.state.article.intro = event.target.value;
    this.setState({article: this.state.article});
  }

  handleChangeContent(event) {
    this.state.article.content = event.target.value;
    this.setState({article: this.state.article});
  }

  cancelForm() {
    hashHistory.push('admin');
  }

  createOrUpdate() {
    addArticle(this.state.article).then((res) => {
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
            <legend>Article</legend>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>ID</label>
              <div className='col-lg-11'>
                <input type='text'
                       className='form-control'
                       value={this.state.article.id}
                       onChange={this.handleChangeId.bind(this)}
                       placeholder='ID...' />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>Title</label>
              <div className='col-lg-11'>
                <input type='text'
                       className='form-control'
                       value={this.state.article.title}
                       onChange={this.handleChangeTitle.bind(this)}
                       placeholder='Title...' />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>Created At</label>
              <div className='col-lg-11'>
                <input type='date'
                       className='form-control'
                       value={this.state.article.createdAt}
                       onChange={this.handleChangeCreatedAt.bind(this)} />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>Visible</label>
              <div className='col-lg-11'>
                <input type='checkbox'
                       checked={this.state.article.visible}
                       onChange={this.handleChangeVisible.bind(this)} />
              </div>
            </div>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>Intro</label>
              <div className='col-lg-11'>
                <textarea className='form-control'
                          rows='3'
                          value={this.state.article.intro}
                          onChange={this.handleChangeIntro.bind(this)}>
                </textarea>
              </div>
            </div>
            <div className='form-group'>
              <label className='col-lg-1 control-label'>Content</label>
              <div className='col-lg-11'>
                <textarea className='form-control'
                          rows='10'
                          value={this.state.article.content}
                          onChange={this.handleChangeContent.bind(this)}>
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

        <h1>{this.state.article.title}</h1>
        <p>
          <span className='glyphicon glyphicon-time'> </span>
          <span> {toDate(this.state.article.createdAt)}</span>
        </p>
        <p className="bold">
          {this.state.article.intro}
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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ArticleForm);
