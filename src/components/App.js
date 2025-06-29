import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      ballPosition: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if ((event.key === 'ArrowRight' || event.keyCode === 39) && this.state.started) {
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
            left: `${this.state.ballPosition}px`,
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
