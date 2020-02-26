import React, { Component } from 'react';
import { Board } from './board';
import './game.css';

class Game extends Component {
  constructor(props){
    super(props);
    this.state ={ /*keep all the state history in an array*/
      history:[{
        squares:Array(9).fill(null),
      }],
      xIsNext:true,
    };
  }
  
  
  render() {
    const history
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export { Game }