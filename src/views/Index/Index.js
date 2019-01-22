import React, { Component } from 'react';
import Btn from '../../parts/Btn/Btn'
import InputField from '../../parts/InputField/InputField'
import CheckBox from '../../parts/CheckBox/CheckBox'

import './index.scss';
class Index extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Container FlexCenter Column Background">
    <div className="ContentWrapper FlexCenter Column RestrictWidth TxtLg">
    <b className="TxtXl">Welcome</b>
    <InputField icon="Username" placeholder="Your email"/>
    <br/>
    <Btn text="New account" icon="🌝"/>
    <br/>
      <CheckBox/>
    </div>
      </div>
    );
  }
}

export default Index;
