import React, { Component } from 'react';
import './Footer.scss';

import Social from '../Social/Social';


class Footer extends Component {

  render() {

    return(
      <footer className="footer">
        <Social href="/" img="/" />
        <Social href="/" img="/" />
      </footer>
    );
  }
}

export default Footer;