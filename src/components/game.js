import React, { Component } from 'react';
import { Board } from './board';
import './game.css';

class GO extends Component {
  
  constructor(props){
    super(props);
    this.state = {IsBlack: false, goStoneNum: 0};
  }
  
  stoneNum(stoneNum){
    this.setState({goStoneNum: stoneNum});
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board onStoneNumUpdated = {(stoneNum) => this.stoneNum(stoneNum)}/>
        </div>
        <div className="game-info">
          <div><h4>We have {this.state.goStoneNum} stars on board.</h4></div>
        </div>
      </div>
    );
  }
}

export { GO }