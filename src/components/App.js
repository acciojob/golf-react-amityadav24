import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBallVisible: false,
      ballPosition: 0
    };
  }

  handleButtonClick = () => {
    this.setState({ isBallVisible: true });
  };

  handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.keyCode === 39) {
      this.setState(prevState => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div>
        {!this.state.isBallVisible ? (
          <button 
            className="start" 
            onClick={this.handleButtonClick}
          >
            Start Game
          </button>
        ) : (
          <div 
            className="ball" 
            style={{
              position: 'absolute',
              left: `${this.state.ballPosition}px`,
              top: '50%',
              width: '20px',
              height: '20px',
              backgroundColor: 'red',
              borderRadius: '50%'
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
