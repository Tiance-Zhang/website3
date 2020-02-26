import React, { Component } from 'react';
import { Square } from './square';
import './board.css';

class Board extends Component {
  
  /* define a state: create a array to store the state of all 9 sqaure; we can pass the value to square by props later*/
  /* initialize the array with null*/
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext:true, /* let 'X' go first*/
    };
  }
  
  
  /* define renderSquare function：pass a value to the squre*/
  renderSquare(i) {
    /*from board, pass the individual state to square*/
    /*sqaure show its individual state*/
    return <Square 
             value={this.state.squares[i]}
             /*when click, call handleClick（）*/
             onClick ={()=> this.handleClick(i)}/>; /*处理事件的监听方法*/
  }
  
  /*Define handleClick()  处理事件监听*/
  /* when click on the square-> the state of square is changed , update state in the Board in an array*/
  /*Board component controls square component; square component gets its value from board component*/
  handleClick(i){
    const squares = this.state.squares.slice(); /*create a copy of squares array*/
    
    if (calculateWinner(squares))
    
    squares[i] = this.state.xIsNext? 'X':'O'; /*'X' and 'O' take turns*/
    this.setState({squares:squares,/*replace old value by new value: can track change in the future*/
                   xIsNext:!this.state.xIsNext, /*flip the value of xIsNext after each click, then 'X' and 'O' can take turns*/
                  });
  }
  
  

  render() {

    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');/*show next player, 'X' and ’O‘ take turns*/
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export { Board }