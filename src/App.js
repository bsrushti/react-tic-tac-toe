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
    this.state = { content: "#" };
  }

  tic(e) {
    this.setState({ content: "*" });
    console.log(e.target.txt);
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
