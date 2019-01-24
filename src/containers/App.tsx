import React, { Component } from 'react';
import './App.scss';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Stopwatch from './Stopwatch/Stopwatch';


class App extends Component {

  render() {

    return (
      <div className="app">
        <Header />

        <div className="app__content content">
          <Stopwatch />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
