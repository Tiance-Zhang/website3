import React, { Component } from 'react';
import './square.css';

class Square extends Component {
  render() {
    return (
      <button className="square">
       {/* button显示square props value*/}
        {this.props.value}
      </button>
    );
  }
}

export { Square }