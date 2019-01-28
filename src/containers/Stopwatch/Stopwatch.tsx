import React, { Component } from 'react';

import ClockFace from '../../components/ClockFace/ClockFace';
import Button from '../../components/ButtonDiv/ButtonDiv';
import LapNote from '../../components/LapNote/LapNote';


interface IStopwatchNote {
  time: number;
  note: string;
}

interface IStopwatchState {
  time: number;
  hours: number;
  minutes: number;
  seconds: number;
  status: boolean;
  lapNotes: Array<IStopwatchNote>;
}

class Stopwatch extends Component<Object, IStopwatchState> {
  private intervalId?: number;
  // private asd: (str: Array<IStopwatchNote>) => void = this.updateNotes.bind(this);

  constructor(props: Object) {
    super(props);

    this.state = {
      time: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      status: false,
      lapNotes: []
    }; 
  }

  stop(): void {
    clearInterval(this.intervalId);
    this.setState({status: false});
  }

  start(): void {
    this.setState({status: true});

    this.intervalId = window.setInterval(() => {

      let time: number = this.state.time;

      this.setState({
        time: ++time,
        hours: Math.floor(time / 3600),
        minutes: Math.floor(time / 60),
        seconds: time % 60
      });
    }, 1000);
  }

  reset(): void {
    this.stop();

    this.setState({
      time: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      status: false,
      lapNotes: []
    });
  }

  lap(): void {
    let time: number = this.state.time;
    let lapNotes: Array<IStopwatchNote> = this.state.lapNotes;

    lapNotes.push({
      time: time,
      note: '' + time
    });

    this.setState({
      lapNotes: lapNotes
    });
  }

  updateNotes(newNotes: Array<IStopwatchNote>): void {

    console.log(newNotes);
    
    this.setState({ lapNotes: newNotes });

    console.log('!!!');
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {

    let { hours, minutes, seconds, status, lapNotes } = this.state;

    return(
      <div>
        <ClockFace hours={hours} minutes={minutes} seconds={seconds} />
        <Button buttonType={status ? 'pause' : 'start'} onClick={() => status ? this.stop() : this.start()} />
        <Button buttonType="reset" onClick={() => this.reset()} />

        {lapNotes.length > 0 && <LapNote notes={lapNotes} update={(notes: Array<IStopwatchNote>) => this.updateNotes(notes)} /> }
        <Button buttonType="lap" onClick={() => this.lap()} />
      </div> 
    );
  }
}

export default Stopwatch;