import React, { Component } from 'react';
import './Social.scss';

interface ISocialProps {
  href: string;
  img: string;
}

class Social extends Component<ISocialProps, Object> {

  render() {

    let { href, img } = this.props;

    return (
      <a href={href} className="social">
        <img src={img} className="social__img" />
      </a>
    );
  }
}

export default Social;