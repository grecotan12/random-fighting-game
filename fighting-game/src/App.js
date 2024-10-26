import Idle from './idle/Idle.png';
import skill_1 from './skills/skill_1.png'
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = { // USER TO PASS INFORMATION FROM OUTSIDE AND AROUND METHODS
      imageSrc: Idle,
      skill: skill_1,
      status: 'idle-stand',
    };
    this.attack = this.attack.bind(this);
    this.gameScreen = this.gameScreen.bind(this);
  }

  attack() {
    document.getElementById("character").className = "fight-stand";
    document.getElementById("skill").className = "skill-one";
    setTimeout(() => {
      document.getElementById("character").className = "idle-stand";
      document.getElementById("skill").className = "";
    }, 1400);
  }

  gameScreen() {
    document.getElementById("screen-one").style.display = "block";
    document.getElementById("menu").style.display = "none";
  }

  menuScreen() {
    document.getElementById("screen-one").style.display = "none";
    document.getElementById("menu").style.display = "block";
  }

  render() {
    return (
      <div className="App">
        <div id="menu">
          <button className="play-btn btn btn-primary btn-lg" onClick={this.gameScreen}>Play</button>
        </div>
        <div id="screen-one">
          <button className="play-btn btn btn-primary btn-lg" onClick={this.menuScreen}>Play</button>
          <h1>Animation</h1>
          <div className='character-container'>
            <div id="container-button">
              <button className='style-button' onClick={this.attack}>Attack</button>
              <button className='style-button' onClick={this.attack2}>Attack2</button>
            </div>
            <img id="character" className={this.state.status} src={this.state.imageSrc} alt="character"/>
            <img id="skill" src={this.state.skill} alt="skill"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
