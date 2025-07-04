import React, { Component } from "react";

class GolfGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,    // false = show Start button; true = show ball
      ballLeft: 0,        // ball horizontal position in pixels
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    // Only move ball if it is shown and Right Arrow key pressed
    if (this.state.showBall && (event.keyCode === 39 || event.key === "ArrowRight")) {
      this.setState((prevState) => ({
        ballLeft: prevState.ballLeft + 5,
      }));
    }
  };

  buttonClickHandler = () => {
    // Hide start button and show ball, reset position
    this.setState({ showBall: true, ballLeft: 0 });
  };

  renderChoice() {
    if (!this.state.showBall) {
      // Show Start button initially
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      // Show ball when game started
      return (
        <div
          className="ball"
          style={{
            position: "absolute",
            left: this.state.ballLeft + "px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "green",
          }}
        />
      );
    }
  }

  render() {
    return (
      <div style={{ position: "relative", height: "100vh" }}>
        {this.renderChoice()}
      </div>
    );
  }
}

export default GolfGame;
