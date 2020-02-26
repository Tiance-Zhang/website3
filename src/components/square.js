import React, { Component } from 'react';
import './square.css';

class Square extends Component {
  /*Constructor：define state- show click status; initialize the value of the state */
  
  /*constructor(props){
    /*定义子类构造函数的时候必须以super(props)开头*/
    /*super(props);
    /*this.state = {
      value:null,
    };
    
  }*/
  
  render() {
    return (
      /*pass a arrow function to the onClick event handler*/
      /*when click on the square, set value of state to be 'X'*/
      <button className="square" 
        onClick ={()=>this.props.onClick()} > {/* onClick事件监听 当square事件函数触发， 其实触发board中的this.handleclick(i)*/}
       {/* button shows square state value*/}
        {this.props.value}
      </button>
    );
  }
}

export { Square }

/*
  function component：只有render方法的情况下，可用函数组件替代class
  use props instead of this.props
  
  function Square(props){
    return (
    <button className ="square" onClick = {props.onClick}>
    {props.value} 
    </button>
    );
    }
*/