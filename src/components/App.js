// src/App.jsx
import React, { Component } from 'react';
import './App.css'; // For optional styles

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,        // show/hide ball
      ballPosition: 0,       // horizontal position
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (this.state.started && (e.key === 'ArrowRight' || e.keyCode === 39)) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({ started: true });
  };

  renderChoice = () => {
    if (this.state.started) {
      return (
        <div
          className="ball"
          style={{
            left: this.state.ballPosition + 'px',
            position: 'absolute',
          }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  };

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
