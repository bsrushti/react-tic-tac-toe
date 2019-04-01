import React, { Component } from "react";

import "./App.css";

class Square extends Component {
  render() {
    return (
      <li
        className={this.props.className}
        id={this.props.id}
        style={{ width: 70 }}
        onClick={this.props.onClick}
      >
        {this.props.value}
      </li>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = { content: "#" };
    this.player1 = [];
    this.player2 = [];
    this.winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  player1Move(id) {
    document.getElementById(id).innerText = "O";
    this.player1.push(+id);
    if (this.checkWinnigCondition(this.player1))
      document.getElementById("container").innerText = "Player1 has won";
  }

  player2Move(id) {
    document.getElementById(id).innerText = "X";
    this.player2.push(+id);
    if (this.checkWinnigCondition(this.player2))
      document.getElementById("container").innerText = "Player2 has won";
  }

  tic(e) {
    let id = e.target.id;
    if (this.count % 2 === 0) {
      this.player1Move(id);
    } else {
      this.player2Move(id);
    }
    this.count++;
    return e.target;
  }

  isSubset(set1, set2) {
    return set1.every(y => set2.includes(y));
  }

  checkWinnigCondition(player) {
    return this.winningCombinations.some(combination =>
      this.isSubset(combination, player)
    );
  }

  renderCell(id, value) {
    return (
      <Square
        value={value}
        className="tic"
        id={id}
        onClick={this.tic.bind(this)}
      />
    );
  }

  render() {
    return (
      <div className="container" id="container">
        <ul id="gameBoard" style={{ width: 350 }}>
          {this.renderCell(0, this.state.content)}
          {this.renderCell(1, this.state.content)}
          {this.renderCell(2, this.state.content)}
          {this.renderCell(3, this.state.content)}
          {this.renderCell(4, this.state.content)}
          {this.renderCell(5, this.state.content)}
          {this.renderCell(6, this.state.content)}
          {this.renderCell(7, this.state.content)}
          {this.renderCell(8, this.state.content)}
        </ul>
      </div>
    );
  }
}
export default Game;
