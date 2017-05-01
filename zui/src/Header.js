import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <h1>Blah blahblah</h1>
          <Navigation />
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
    <div className="nav">
      <ul>
        <li><Link to={"/about/"}>About</Link></li>
        <li><Link to={"/projects/"}>Projects</Link></li>
        <li><Link to={"/thoughts"}>Thoughts</Link></li>
      </ul>
    </div>);
  }
}


export default Header;
