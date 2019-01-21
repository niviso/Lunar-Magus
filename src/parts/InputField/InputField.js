import React, { Component } from 'react';
import './InputField.scss';
class InputField extends Component {
  constructor(props){
    super(props);
    this.state = {
      focused: false
    }
  }
  static get defaultProps() {
    return {
      text: "Button",
      icon: "Your name",
      color: "Orange",
      placeholder: "Placeholder"
        };
  }

  onBlur = () => {
    this.setState({ focused: false })
}
onFocus = () => {
    this.setState({ focused: true })
}
  render() {
    return (
      <div className={this.state.focused ? "active InputFieldWrapper" : "InputFieldWrapper"}>
       <input type="text" class="txt" onFocus={this.onFocus} onBlur={this.onBlur} placeholder={this.props.placeholder}></input>
       <div className={ "Bg"+this.props.color + " " + "icon" }>{this.props.icon}</div>
       </div>
    );
  }
}

export default InputField;
