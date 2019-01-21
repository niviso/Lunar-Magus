import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Index from './Index/Index';
import Login from './Login/Login';

import './default.scss';

class router extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
      <Router>
      <Switch>
     <Route path="/" exact component={Index} />
     <Route path="/login" component={Login} />
     </Switch>
{/*       <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} /> */}
      </Router>
      </div>
    );
  }
}

export default router;
