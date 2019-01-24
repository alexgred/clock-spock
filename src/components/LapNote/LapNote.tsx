import React, { Component } from 'react';
import './LapNote.scss';


interface ILapNoteProps {
  notes: Array<Object>;
}

interface ILapNoteState {

}

class LapNote extends Component<ILapNoteProps, Object> {

  render() {

    console.log(this.props.notes)

    return(
      <div className="lapnote">
      </div>
    );
  }
}

export default LapNote;
