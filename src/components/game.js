import React, { Component } from 'react';
import { Board } from './board';
import './game.css';

class GO extends Component {
  
  constructor(props){
    super(props);
    this.state = {IsBlack: false, gameStoneNum: 0};
  }
  
  renewStoneNum(stoneNum){
    this.setState({gameStoneNum: stoneNum});
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board onStoneNumUpdated = {(stoneNum) => this.renewStoneNum(stoneNum)}/>
        </div>
        <div className="game-info">
          <div>Now {this.state.gameStoneNum} stones total.</div>
        </div>
      </div>
    );
  }
}

export { GO }