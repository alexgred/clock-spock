import React, { Component } from 'react';
import './ButtonDiv.scss';


interface IButtonDivProps { 
  buttonType: string;
  classes?: string;
}


class ButtonDiv extends Component<IButtonDivProps, Object> {

  render() {

    let classes: string = 'button-div button-div__' + this.props.buttonType + ' ' + this.props.classes;

    return (

      <div className={ classes }>
        <img src="" className="button-div__img" />
      </div>
    );
  }
}

export default ButtonDiv;