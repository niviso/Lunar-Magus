import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Index/Index';
import './default.scss';

class router extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Router>
      
     <Route path="/" exact component={Index} />
{/*       <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} /> */}
      </Router>
    );
  }
}

export default router;
