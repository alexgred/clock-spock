import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.scss';

import Clock from '../components/Clock/Clock';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';
import Stopwatch from '../components/Stopwatch/Stopwatch';

class App extends Component {

  render() {

    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
        </header>

        <div className="app__content">
          <Clock interval={500} />
          <ButtonGroup />
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export default App;
