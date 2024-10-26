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
    this.changeScreen = this.changeScreen.bind(this);
  }

  attack() {
    document.getElementById("character").className = "fight-stand";
    document.getElementById("skill").className = "skill-one";
    setTimeout(() => {
      document.getElementById("character").className = "idle-stand";
      document.getElementById("skill").className = "";
    }, 1400);
  }

  changeScreen() {
    document.getElementById("screen-one").style.display = "block";
    document.getElementById("menu").style.display = "none";
  }

  render() {
    return (
      <div className="App">
        <div id="menu">
          <button onClick={this.changeScreen}>Play</button>
        </div>
        <div id="screen-one">
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
