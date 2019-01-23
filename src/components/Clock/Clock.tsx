import React, { Component } from 'react';
import './Clock.scss';


interface IClockState {
  time: string;
}

class Clock extends Component<Object, IClockState> {
  private intervalId?: number;

  constructor(props: Object) {
    super(props);
    
    this.state = {
      time: ''
    };

  }

  componentDidMount() {

    this.intervalId = window.setInterval(() => {
      let date = new Date();

      this.setState({
        time: date.toLocaleTimeString('en-Gb')
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {

    let { time } = this.state;

    return(

      <div className="clock">
        <div className="clock__item clock__time">{time}</div>
      </div>
    );
  }
}

export default Clock;