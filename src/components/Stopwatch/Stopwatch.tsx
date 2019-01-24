import React, { Component } from 'react';

import ClockFace from '../ClockFace/ClockFace';
import Button from '../ButtonDiv/ButtonDiv';


interface IStopWatchState {
  time: number;
  hours: number;
  minutes: number;
  seconds: number;
  status: boolean;
}

class Stopwatch extends Component<Object, IStopWatchState> {
  private intervalId?: number;

  constructor(props: Object) {
    super(props);

    this.state = {
      time: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      status: false
    };
  }

  stop(): void {

    clearInterval(this.intervalId);
    this.setState({status: false});
  }

  start(): void {

    this.setState({status: true});

    this.intervalId = window.setInterval(() => {

      let time = this.state.time;

      this.setState({
        time: ++time,
        hours: Math.floor(time / 3600),
        minutes: Math.floor(time / 60),
        seconds: time % 60
      });
    }, 1000);
  }

  reset(): void {

    this.setState({
      time: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      status: false
    });
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {

    let { hours, minutes, seconds, status } = this.state;

    return(
      <div>
        <ClockFace hours={hours} minutes={minutes} seconds={seconds} />
        <Button buttonType={status ? 'pause' : 'start'} onClick={() => status ? this.stop() : this.start()} />
        <Button buttonType="reset" onClick={() => this.reset()} />
      </div> 
    );
  }
}

export default Stopwatch;