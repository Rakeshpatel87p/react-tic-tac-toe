import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Props is how information is passed from parent to child. Attributes in HTML

//State === memory, how components remember things/a component's conscious

//component 1 - functional component
function Square(props) {
  return (
    
    <button   
      className="square" onClick={props.onClick} >

      {props.value}
    
    </button>
  )
}

//component 2
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); //create a new array
    squares[i] = 'X'; //mark X for square clicked
    this.setState({squares: squares}); // update squares 'memory'
  }

  renderSquare(i) {
    return (
    <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)} 
      />
    );
  }

  render() {
    const status = 'Next player: X';

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

//component 3
class Game extends React.Component {
  render() {
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
