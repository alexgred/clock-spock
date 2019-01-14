import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.scss';

import Clock from '../components/Clock/Clock';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';

class App extends Component {

  render() {

    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
        </header>

        <div className="app__content">
          <Clock />
          <ButtonGroup />
        </div>
      </div>
    );
  }
}

export default App;
