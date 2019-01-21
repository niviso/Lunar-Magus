import React, { Component } from 'react';
import './InputField.scss';
class InputField extends Component {
  constructor(props){
    super(props);
  }
  static get defaultProps() {
    return {
      text: "Button",
      icon: "?",
      color: "black"
        };
  }
  render() {
    return (
      <div className="btnWrapper">
       <input type="text" class="txt"></input>
       <div className={ this.props.color + " " + "icon" }>{this.props.icon}</div>
       </div>
    );
  }
}

export default InputField;
