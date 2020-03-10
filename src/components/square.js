import React, { Component } from 'react';
import './square.css';
class Square extends Component {  
  constructor(props){
    super(props);
    this.state = {
      stoneImg: '',}
  }
  render() {
    return (
      <div className="square" onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );}
}
export { Square };