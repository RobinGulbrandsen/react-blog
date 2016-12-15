import React from 'react';

import { Col } from 'react-bootstrap';

class Login extends React.Component {

  constructor(props) {
    super(props);
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
                   name='username'
                   placeholder='Username...' />
          </div>                  
          <div className='form-group'>  
            <input type='password'
                   className='form-control'
                   name='password'
                   placeholder='Password...' />      
          </div>
          
          <button className='btn btn-lg btn-primary btn-block'>
            Login
          </button>   
        
        </Col>
        <Col xs={0} sm={3} md={3}></Col>
      </div>
    );  
  }
} 

export default Login;
