import React from 'react';
require('../../assets/styles.scss');

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Main Page!</h1>
        {this.props.children}
      </div>
    );
  }
};