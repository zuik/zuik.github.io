import React, { Component } from 'react';
import Header from './Header';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="container">
          <Header />
          <h1>Hello, world</h1>
      </div>
    );
  }
}

export default Home;
