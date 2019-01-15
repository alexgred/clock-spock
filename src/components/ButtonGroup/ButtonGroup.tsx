import React, { Component } from 'react';
import './ButtonGroup.scss';

import Button from '../ButtonDiv/ButtonDiv';

class ButtonGroup extends Component {

  render() {

    return (

      <div className="button-group">
        <Button buttonType="pause" classes="button-group__item" />
        <Button buttonType="play" classes="button-group__item" />
      </div>
    );
  }
}

export default ButtonGroup;