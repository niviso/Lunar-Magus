import React, { Component } from 'react';
import './CheckBox.scss';
class CheckBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: this.props.active
    }
  }
  static get defaultProps() {

    return {
      text: "New button",
      icon: "+",
      color: "Black",
      onClick: () => {alert("Yay!")}
    };
  }

  _onClick = () => {
    this.setState((prevState) => ({
      active: !prevState.active
    }));
  }
  render() {
    return (
      <div className="CheckBox" onClick={this._onClick}>
      <div className="txt">txt</div>
      <div className={this.state.active ? "CheckBoxWrapper Active" : "CheckBoxWrapper Deactivated"}>
          <div className="Icon">{this.state.active ? "✓" : "✖"}</div>
       </div>
       </div>
    );
  }
}

export default CheckBox;
