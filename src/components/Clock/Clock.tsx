import React, { Component } from 'react';

interface IClockState {
  hours: number;
  minutes: number;
  seconds: number;
}

class Clock extends Component<Object, IClockState> {
  private intervalId?: number;

  constructor(props: Object) {
    super(props);
    
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };

  }

  componentDidMount() {

    this.intervalId = window.setInterval(() => {
      let date = new Date();

      this.setState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {

    let {hours, minutes, seconds} = this.state;

    return(

      <div className="clock">
        <div className="clock__item clock__hours">{ hours }</div>
        <div className="clock__item clock__minutes">{ minutes }</div>
        <div className="clock__item clock__seconds">{ seconds }</div>
      </div>
    );
  }
}

export default Clock;