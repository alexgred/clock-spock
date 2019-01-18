import React, { Component } from 'react';

import ClockFace from '../ClockFace/ClockFace';
import Button from '../ButtonDiv/ButtonDiv';


interface IStopWatchState {
  time: number;
  hours: number;
  minutes: number;
  seconds: number;
}

class Stopwatch extends Component<Object, IStopWatchState> {
  private intervalId?: number;

  constructor(props: Object) {
    super(props);

    this.state = {
      time: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  stopwatchStop(): void {

  }

  componentDidMount() {
    let incTime = this.state.time;

    this.intervalId = window.setInterval(() => {

      this.setState({
        time: ++incTime,
        hours: Math.floor(incTime / 3600),
        minutes: Math.floor(incTime / 60),
        seconds: incTime % 60
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {

    let { hours, minutes, seconds } = this.state;

    return(
      <div>
        <ClockFace hours={hours} minutes={minutes} seconds={seconds} />
        <Button buttonType="start" />
        <Button buttonType="stop" />
      </div> 
    );
  }
}

export default Stopwatch;