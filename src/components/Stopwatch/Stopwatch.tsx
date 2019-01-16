import React, { Component } from 'react';


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

  componentDidMount() {
    let incTime = this.state.time;

    this.intervalId = window.setInterval(() => {

      this.setState({
        time: incTime++,
        hours: incTime % 3600,
        minutes: incTime % 60
      });
    }, 1000);
  }

  render() {

    let {hours, minutes, time} = this.state;

    return(
      <div>
        <div>{hours}:{minutes}:{time}</div>
      </div> 
    );
  }
}

export default Stopwatch;