import Idle from './idle/Idle.png';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      imageSrc: Idle,
      status: 'idle-stand',
      isClick: false,
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage(event) {
    if (!this.state.isClick) {
      this.setState({
        status: 'fight-stand',
        isClick: true
      })
    } else {
      this.setState({
        status: 'idle-stand',
        isClick: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Animation</h1>
        <div className='character-container'>
          <img className={this.state.status} src={this.state.imageSrc} alt="character"/>
          <button onClick={this.changeImage}>Change</button>
        </div>
      </div>
    );
  }
}

export default App;
