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
  }

  tic(e) {
    let id = e.target.id;
    if (this.count % 2 === 0) {
      document.getElementById(id).innerText = "O";
      this.player1.push(+id);
    } else {
      document.getElementById(id).innerText = "X";
      this.player2.push(+id);
    }
    
    this.count++;
    return e.target;
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
      <div>
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
