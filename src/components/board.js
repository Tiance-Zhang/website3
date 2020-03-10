import React, { Component } from "react";
import { Square } from "./square";
import "./board.css";

class Board extends Component {
  rowNum = 19;
  colNum = 19;

  constructor(props) {
    super(props);
    this.state = {
      stones: Array(this.rowNum * this.colNum).fill(null),
      stonesBf: Array(this.rowNum * this.colNum).fill(null),
      isBlack: true
    };
  }

  handleClick(e) {
    const bfStones = this.state.stones.slice(); // to avoid same-pointer thing
    const crtStones = this.state.stones.slice(); // make a copy. I didn't use this.
    if (crtStones[e] == null) {
      this.setState({ stonesBf: bfStones });
      crtStones[e] = this.state.isBlack ? "★" : "O";
      this.setState({ stones: crtStones, isBlack: !this.state.isBlack });
      // console.log(stones);
      this.props.onStoneNumUpdated(crtStones.filter(s => s != null).length);
      //props can be anything
    } else {
      //remove an existing stone
      this.setState({ stonesBf: bfStones });
      crtStones[e] = null;
      this.setState({ stones: crtStones });
      // console.log(crtStones);
      this.setState({isBlack: !this.state.isBlack});
      this.props.onStoneNumUpdated(crtStones.filter(s => s != null).length);
    }
  }

  renderSquare(e) {
    return (
      <Square
        key={"square-" + e}
        value={this.state.stones[e]}
        onClick={() => this.handleClick(e)}
      />
    );
  }

  undo() {
    this.setState({
      stones: this.state.stonesBf,
      isBlack: !this.state.isBlack
       
    });
  }
  pass() {
    this.setState({ isBlack: !this.state.isBlack });
  }

  render() {
    const status = "Next player: " + (this.state.isBlack ? "Black" : "White");

    //const means you cannot change what it points to.
    //const row = []; then row =[1, 2, 3] is invalid!
    //but row.push() is OK.
    const showBoard = [];

    for (let i = 0; i < this.rowNum; i++) {
      const row = [];
      for (let j = 0; j < this.colNum; j++) {
        row.push(this.renderSquare(i * this.rowNum + j));
      }
      showBoard.push(
        <div key={"row" + i} className="board-row">
          {
            row
          }
        </div>
      );
    }

    return (
      <div>
        <div>Black goes first.</div>
        <div className="status">
          <strong>{status}</strong>
        </div>
        {showBoard}
        <button class="btn btn-light" onClick={() => this.undo()}>
          UNDO
        </button>
        <button class="btn btn-light" onClick={() => this.pass()}>
          PASS
        </button>
        <div>Click existing stones to remove them.</div>
      </div>
    );
  }
}
export { Board };
