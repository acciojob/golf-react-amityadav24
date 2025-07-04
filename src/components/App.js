import React, { Component } from "react";
import ".styles/App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      ballPosition: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (
      this.state.gameStarted &&
      (event.key === "ArrowRight" || event.keyCode === 39)
    ) {
      this.setState((prevState) => {
        // Limit ball movement so it doesn't go off screen (optional)
        const maxRight = window.innerWidth - 60; // ball width + some padding
        const nextPos = prevState.ballPosition + 5;
        return {
          ballPosition: nextPos > maxRight ? maxRight : nextPos,
        };
      });
    }
  };

  buttonClickHandler = () => {
    this.setState({
      gameStarted: true,
      ballPosition: 0,
    });
  };

  render() {
    const { gameStarted, ballPosition } = this.state;

    return (
      <div
        style={{
          position: "relative",
          height: "100vh",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        {!gameStarted && (
          <button
            className="start"
            onClick={this.buttonClickHandler}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "15px 30px",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            Start
          </button>
        )}

        {gameStarted && (
          <div
            className="ball"
            style={{
              position: "absolute",
              top: "50%",
              left: ballPosition + "px",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "green",
              transition: "left 0.1s ease",
              boxShadow: "0 0 8px 2px rgba(0, 128, 0, 0.5)",
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
