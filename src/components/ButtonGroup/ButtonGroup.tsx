import React, { Component } from 'react';
import './ButtonGroup.scss';

import ButtonDiv from '../ButtonDiv/ButtonDiv';

class ButtonGroup extends Component {

  render() {

    return (

      <div className="button-group">
        <ButtonDiv buttonType="pause" classes="button-group__item" />
        <ButtonDiv buttonType="play" classes="button-group__item" />
      </div>
    );
  }
}

export default ButtonGroup;