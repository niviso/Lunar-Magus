import React, { Component } from 'react';
import Btn from '../../parts/Btn/Btn'
import InputField from '../../parts/InputField/InputField'

import './index.scss';
class Index extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Container FlexCenter">
      <Btn/>
      <InputField/>
      </div>
    );
  }
}

export default Index;
