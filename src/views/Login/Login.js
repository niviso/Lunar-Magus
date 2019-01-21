import React, { Component } from 'react';
import Btn from '../../parts/Btn/Btn'
import InputField from '../../parts/InputField/InputField'

import './Login.scss';
class Login extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Container FlexCenter Column Background">
      <div className="IndexWrapper FlexCenter Column FadeIn">
      <div className="Header">Lunar Magus</div>
      <div className="ContentWrapper">
      <InputField icon="Username" placeholder="Your email"/>
      <br/>
      <InputField icon="Password" placeholder="6-digit code"/>
      <br/>
      <div class="FlexCenter AlignSpace FillWidth">
      <Btn text="New account" icon="🌝"/>
      <Btn text="Log in" icon="✋"/>
      </div>
  </div>
      </div>
      </div>
    );
  }
}

export default Login;
