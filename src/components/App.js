import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballVisible: false,
      ballPosition: 0,
    };
  }

  buttonClickHandler = () => {
    this.setState({ ballVisible: true });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 39) { // Right Arrow key
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  };

  renderChoice() {
    if (this.state.ballVisible) {
      return (
        <div
          className="ball"
          style={{ position: 'absolute', left: this.state.ballPosition + 'px', top: '50%' }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start Game
        </button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderChoice()}
      </div>
    );
  }
}

export default App;
