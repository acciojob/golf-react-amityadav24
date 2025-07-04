import React from "react";
import './../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,
      ballPosition: 0
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleStart = () => {
    this.setState({ showBall: true });
  };

  handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.keyCode === 39) {
      this.setState(prevState => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  };

  render() {
    return (
      <div className="App">
        {!this.state.showBall ? (
          <button className="start" onClick={this.handleStart}>
            Start Game
          </button>
        ) : (
          <div 
            className="ball" 
            style={{
              position: 'absolute',
              left: `${this.state.ballPosition}px`,
              top: '50%'
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
