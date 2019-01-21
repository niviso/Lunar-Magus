import React, { Component } from 'react';
import Btn from '../../parts/Btn/Btn'
import './index.scss';
class Index extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Container FlexCenter">
      <Btn/>
      </div>
    );
  }
}

export default Index;
