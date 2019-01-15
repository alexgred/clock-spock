import React, { Component } from 'react';


interface IClockProps {
  interval: number;
}

interface IClockState {
  time: string;
}

class Clock extends Component<IClockProps, IClockState> {
  private intervalId?: number;

  constructor(props: IClockProps) {
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
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {

    let {time} = this.state;

    return(

      <div className="clock">
        <div className="clock__item clock__time">{time}</div>
      </div>
    );
  }
}

export default Clock;