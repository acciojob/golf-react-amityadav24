import React, { Component } from "react";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: 0
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if ((event.key === "ArrowRight" || event.keyCode === 39) && this.state.renderBall) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  }

  startGame = () => {
    this.setState({ renderBall: true });
  };

  render() {
    return (
      <div className="playground">
        {!this.state.renderBall && (
          <button className="start" onClick={this.startGame}>
            Start
          </button>
        )}
        {this.state.renderBall && (
          <div
            className="ball"
            style={{
              position: "absolute",
              left: `${this.state.ballPosition}px`
            }}
          ></div>
        )}
      </div>
    );
  }
}

export default App;
