import React, { Component } from "react";
import { Square } from "./square";
import "./board.css";

class Board extends Component {
  rowNum = 9;
  colNum = 9;

  constructor(props) {
    super(props);
    this.state = {
      stones: Array(this.rowNum * this.colNum).fill(null),
      stonesBf: Array(this.rowNum * this.colNum).fill(null),
      isBlack: true
    };
  }

  handleClick(i) {
    const bfStones = this.state.stones.slice(); // to avoid same-pointer thing
    const crtStones = this.state.stones.slice(); // make a copy. I didn't use this.
    if (crtStones[i] == null) {
      this.setState({ stonesBf: bfStones });
      crtStones[i] = this.state.isBlack ? "●" : "○";
      this.setState({ stones: crtStones, isBlack: !this.state.isBlack });
      // console.log(stones);
      this.props.onStoneNumUpdated(crtStones.filter(s => s != null).length);
      //props can be anything
    } else {
      //remove an existing stone
      this.setState({ stonesBf: bfStones });
      crtStones[i] = null;
      this.setState({ stones: crtStones });
      // console.log(crtStones);
      this.props.onStoneNumUpdated(crtStones.filter(s => s != null).length);
    }
  }

  renderSquare(i) {
    return (
      <Square
        key={"square-" + i}
        value={this.state.stones[i]}
        onClick={() => this.handleClick(i)}
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

    for (let ri = 0; ri < this.rowNum; ri++) {
      const eachRow = [];
      for (let cj = 0; cj < this.colNum; cj++) {
        eachRow.push(this.renderSquare(ri * this.rowNum + cj));
      }
      showBoard.push(
        <div key={"row" + ri} className="board-row">
          {eachRow}
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
