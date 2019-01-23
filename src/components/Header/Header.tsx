import React, { Component } from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';

import Logo from '../Logo/Logo';
import Clock from '../Clock/Clock';

class Header extends Component {

  render() {

    return(
      <header className="header">
        <div>Settings</div>
        <Logo url={logo} />
        <Clock />
      </header>
    );
  }
}

export default Header;