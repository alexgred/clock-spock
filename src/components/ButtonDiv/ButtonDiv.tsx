import React, { Component } from 'react';
import './ButtonDiv.scss';


interface IButtonDivProps { 
  buttonType: string;
  onClick: () => void;
  classes?: string;
}


class ButtonDiv extends Component<IButtonDivProps, Object> {

  render() {

    let classes: string;

    if (this.props.classes) {
      classes = 'button-div button-div__' + this.props.buttonType + ' ' + this.props.classes;
    }
    else {
      classes = 'button-div button-div__' + this.props.buttonType;
    }

    return (

      <div className={classes} onClick={this.props.onClick}>
        <img src="" className="button-div__img" />
      </div>
    );
  }
}

export default ButtonDiv;