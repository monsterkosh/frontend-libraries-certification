// @ts-nocheck
/* eslint-disable default-case */
import React from 'react';

/**
 * @param {{ handleClick: { (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void; (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void; (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void; (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void; (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void; (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void; (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void; (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void; (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void; }; }} props
 */
function DrumPad(props) {
  return (
    <div>
      <div id='row1'>
        <div id='button1' className='drum-pad' onClick={props.handleClick}>
          <audio
            className='clip'
            id='Q'
            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
          />
          Q
        </div>
        <div id='button2' className='drum-pad' onClick={props.handleClick}>
          <audio
            className='clip'
            id='W'
            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
          />
          W
        </div>
        <div id='button3' className='drum-pad' onClick={props.handleClick}>
          <audio
            className='clip'
            id='E'
            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
          />
          E
        </div>
      </div>
      <div id='row2'>
        <div id='button4' className='drum-pad' onClick={props.handleClick}>
          <audio
            className='clip'
            id='A'
            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
          />
          A
        </div>
        <div id='button5' className='drum-pad' onClick={props.handleClick}>
          <audio
            className='clip'
            id='S'
            src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
          />
          S
        </div>
        <div id='button6' className='drum-pad' onClick={props.handleClick}>
          <audio
            className='clip'
            id='D'
            src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
          />
          D
        </div>
      </div>
      <div id='row3'>
        <div id='button7' className='drum-pad' onClick={props.handleClick}>
          <audio
            className='clip'
            id='Z'
            src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
          />
          Z
        </div>
        <div id='button9' className='drum-pad' onClick={props.handleClick}>
          <audio
            className='clip'
            id='X'
            src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
          />
          X
        </div>
        <div id='button9' className='drum-pad' onClick={props.handleClick}>
          <audio
            className='clip'
            id='C'
            src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
          />
          C
        </div>
      </div>
    </div>
  );
}
class DrumMachine2 extends React.Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      display: String.fromCharCode(160),
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  /**
   * @param {{ preventDefault: () => void; keyCode: any; }} e
   */
  handleKeyPress(e) {
    e.preventDefault();
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 81:
        document.getElementById('Q').play();
        this.setState({
          display: 'Q',
        });
        break;
      case 87:
        document.getElementById('W').play();
        this.setState({
          display: 'W',
        });
        break;
      case 69:
        document.getElementById('E').play();
        this.setState({
          display: 'Q',
        });
        break;
      case 65:
        document.getElementById('A').play();
        this.setState({
          display: 'A',
        });
        break;
      case 83:
        document.getElementById('S').play();
        this.setState({
          display: 'S',
        });
        break;
      case 68:
        document.getElementById('D').play();
        this.setState({
          display: 'D',
        });
        break;
      case 90:
        document.getElementById('Z').play();
        this.setState({
          display: 'Z',
        });
        break;
      case 88:
        document.getElementById('X').play();
        this.setState({
          display: 'X',
        });
        break;
      case 67:
        document.getElementById('C').play();
        this.setState({
          display: 'C',
        });
        break;
    }
  }

  /**
   * @param {{ target: { children: { id: any; }[]; }; }} event
   */
  handleClick(event) {
    event.target.children[0].play();
    this.setState({
      display: event.target.children[0].id,
    });
  }

  render() {
    return (
      <div id='drum-machine'>
        Drum Machine!
        <div id='display'>{this.state.display}</div>
        <div id='drumpad'>
          <DrumPad handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default DrumMachine2;
