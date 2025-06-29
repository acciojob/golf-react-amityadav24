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
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      if (this.state.renderBall) {
        this.setState((prevState) => ({
          ballPosition: prevState.ballPosition + 5
        }));
      }
    }
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px`, position: "absolute" }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={() => this.setState({ renderBall: true })}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
