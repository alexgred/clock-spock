import React, { Component } from 'react';


interface IClockFaceProps  {
  hours: number;
  minutes: number;
  seconds: number;
}

class ClockFace extends Component<IClockFaceProps, Object> {

  doubleSymbol(number: number): string {

    if (number < 10) {
      return '0' + String(number);
    }
    else {
      return String(number);
    }
  }

  render() {
    let { hours, minutes, seconds } = this.props;

    return(

      <div className="clock-face">
        {this.doubleSymbol(hours)}:{this.doubleSymbol(minutes)}:{this.doubleSymbol(seconds)}
      </div>
    );
  }
}

export default ClockFace;