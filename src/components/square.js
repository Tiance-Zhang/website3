import React, { Component } from 'react';
import './square.css';

class Square extends Component {
  /*Constructor：define state- initialize */
  constructor(props){
    super(props);
    this.state = {
      value:null,
    };
    
  }
  
  render() {
    return (
      /*pass a arrow function to the onClick action*/
      <button className="square" onClick ={()=>alert('click!')} >
       {/* button shows square props value*/}
        {this.props.value}
      </button>
    );
  }
}

export { Square }