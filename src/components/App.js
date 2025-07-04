import React, { Component } from "react";

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
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
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
      <div style={{ position: "relative", height: "100vh" }}>
        {!gameStarted && (
          <button className="start" onClick={this.buttonClickHandler}>
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
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
