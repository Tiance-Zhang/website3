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
      isBlack: false
    };
  }
  undo() {
    this.setState({
      stones: this.state.stonesBf,
      isBlack: !this.state.isBlack   
    });
  }
  renderSquare(e) {
    return (
      <Square
        key={"square-" + e}
        value={this.state.stones[e]}
        onClick={() => this.handleClick(e)}/>
    );
  }
  pass() {this.setState({ isBlack: !this.state.isBlack });}

  handleClick(e) {
    const aStones = this.state.stones.slice(); 
    const bStones = this.state.stones.slice();
    if (bStones[e] == null) {
      this.setState({ stonesBf: aStones });
      bStones[e] = this.state.isBlack ? "★" : "☆";
      this.setState({ stones: bStones, isBlack: !this.state.isBlack });
      this.props.onStoneNumUpdated(bStones.filter(s => s != null).length);
    }
    else {
      this.setState({ stonesBf: bStones });
      bStones[e] = null;
      this.setState({ stones: bStones });
      this.props.onStoneNumUpdated(bStones.filter(s => s != null).length);
    }
  }

  render() {
    const status = "Whose TURN ? =====> " + (this.state.isBlack ? "★" : "");
    const showBoard = [];
    for (let i = 0; i < this.rowNum; i++) {
      const row = [];
      for (let j = 0; j < this.colNum; j++) {
        row.push(this.renderSquare(i * this.rowNum + j ));
      }
      showBoard.push(
        <div key={"row" + i} className="board-row">{row}
        </div>
      );
    }

    return (
        <div class="text-center" className="GOB">
        <h2 class="text-warning">If you want to REMOVE a star, just CLICK on it!</h2>
        <div className="status" >
          <h3>{status}</h3>
        </div>
        {showBoard}
        <button class="btn btn-danger" onClick={() => this.undo()}>
          UNDO
        </button>
        <button class="btn btn-danger"  onClick={() => this.pass()}>
          PASS
        </button>
      </div>
    );
  }
}
export { Board };
