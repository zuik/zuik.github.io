import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Header';
import './Home.css';

class Home extends Component {
  render() {
    return (<Router>
      <div className="container">
          <Header />
          <Route path="/about/" component={About} />
          <Route path="/projects/" component={Project} />
          <Route path="/thoughts/" component={Thoughts} />
      </div>
      </Router>
    );
  }
}


class About extends Component {
  render() {
    return (
    <p>Content content content blah blah blah blahContent content content blah blah blah blahContent content content blah blah blah blahContent content content blah blah blah blahContent content content blah blah blah blah</p>
    );
  }
}

class Project extends Component {
  render() {
    return (
      <h2>My projects would go here instead</h2>
    );
  }
}

class Thoughts extends Component {
  render() {
    return (
      <h2>My blog</h2>
    );
  }
}

export default Home;
