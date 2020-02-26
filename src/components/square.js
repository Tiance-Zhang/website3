import React, { Component } from 'react';
import './square.css';

class Square extends Component {
  /*Constructor：define state- show click status; initialize the value of the state */
  constructor(props){
    /*定义子类构造函数的时候必须以super(props)开头*/
    super(props);
    this.state = {
      value:null,
    };
    
  }
  
  render() {
    return (
      /*pass a arrow function to the onClick event handler*/
      /*when click on the square, set value of state to be 'X'*/
      <button className="square" 
        onClick ={()=>this.setState({value:'X'})} >
       {/* button shows square state value*/}
        {this.state.value}
      </button>
    );
  }
}

export { Square }