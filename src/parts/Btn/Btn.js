import React, { Component } from 'react';
import './Btn.scss';
class Btn extends Component {
  constructor(props){
    super(props);
  }
  static get defaultProps() {
    return {
      text: "Button",
      icon: "?",
      color: "black",
      onClick: () => {alert("Yay!")}
    };
  }

  _onClick = () => {
    this.props.onClick();
  }
  render() {
    return (
      <div className="btnWrapper" onClick={this._onClick}>
       <div className="txt">
       {this.props.text}
       </div>
       <div className={ this.props.color + " " + "icon" }>{this.props.icon}</div>
       </div>
    );
  }
}

export default Btn;
