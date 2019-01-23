import React, { Component } from 'react';
import './Logo.scss';
import { string } from 'prop-types';

interface ILogoProps {
  url: string;
}

class Logo extends Component<ILogoProps, Object> {

  render() {

    let { url } = this.props;

    return (

      <div className="logo">
        <a className="logo__link" href="/">
          <span className="logo__text">Clock</span>
          <img src={url} className="logo__img" alt="logo" />
          <span className="logo__text">Spock</span>
        </a>
      </div>
    );
  }
}

export default Logo;