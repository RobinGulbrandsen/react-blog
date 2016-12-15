import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login } from '../actions/userAction';

import { Col } from 'react-bootstrap';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  loginUser() {
    if (this.state.username === '' || 
        this.state.password === '') {
      return;
    }

    login(this.state);
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div>
        <Col xs={0} sm={3} md={3}></Col>
        <Col xs={12} sm={6} md={6}>

          <h2 className='center'>Please login</h2>

          <div className='form-group'>
            <input type='text'
                   className='form-control'
                   value={this.state.username}
                   onChange={this.handleChangeUsername.bind(this)}
                   placeholder='Username...' />
          </div>                  
          <div className='form-group'>  
            <input type='password'
                   className='form-control'
                   value={this.state.password}
                   onChange={this.handleChangePassword.bind(this)}
                   placeholder='Password...' />      
          </div>
          
          <button className='btn btn-lg btn-primary btn-block'
                  type='submit'
                  onClick={this.loginUser.bind(this)}>
            Login
          </button>   
        
        </Col>
        <Col xs={0} sm={3} md={3}></Col>
      </div>
    );  
  }
} 

export default Login;
