import React from "react";
import './../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      ballPosition: 0
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleStartGame = () => {
    this.setState({ gameStarted: true });
  };

  handleKeyDown(event) {
    if (event.key === 'ArrowRight' && this.state.gameStarted) {
      this.setState(prevState => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  }

  render() {
    return (
      <div className="main">
        {!this.state.gameStarted ? (
          <button className="start" onClick={this.handleStartGame}>
            Start Game
          </button>
        ) : (
          <div className="ball" style={{ left: `${this.state.ballPosition}px` }} />
        )}
      </div>
    );
  }
}

export default App;
