import React, { Component } from 'react';
import './LapNote.scss';
import Button from '../ButtonDiv/ButtonDiv';
import ClockFace from '../ClockFace/ClockFace';


interface ILapNoteNote {
  time: number;
  note: string;
}

interface ILapNoteProps {
  notes: Array<ILapNoteNote>;
  update: (notes: Array<ILapNoteNote>) => void;
}

class LapNote extends Component<ILapNoteProps, Object> {

  write(index: number): void {
    let notes: Array<ILapNoteNote> = JSON.parse(JSON.stringify(this.props.notes));

    notes[index].note = 'qwe';
    
    this.props.update(notes);
  }

  render() {

    const rows: JSX.Element[] = this.props.notes.map((lap: ILapNoteNote, index: number): JSX.Element => {

      return <div key={index}>
          <ClockFace hours={Math.floor(lap.time / 3600)} minutes={Math.floor(lap.time / 60)} seconds={lap.time % 60} />
          {lap.note}
          <Button onClick={() => this.write(index)} buttonType="write" />
        </div>;
    });

    return(
      <div className="lapnote">
        {rows}
        {/* <Button onClick={() => this.props.note()} buttonType="q" /> */}
      </div>
    );
  }
}

export default LapNote;
