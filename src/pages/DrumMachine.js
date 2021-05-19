// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { bankOne } from '../components/AudioClips';

const DrumMachine = () => {
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState('');
  const [speed, setSpeed] = useState(0.5);

  const playRecording = () => {
    let recordArray = recording.split(' ');
    let index = 0;
    const interval = setInterval(() => {
      const audioTag = document.getElementById(recordArray[index]);
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    }, speed * 600);
    setTimeout(
      () => clearInterval(interval),
      600 * speed * recordArray.length - 1
    );
  };

  return (
    <div className='bg-info min-vh-100 text-white row h-100'>
      <div className='text-center col-sm-12 my-auto drum-pad'>
        <h2>Drum Machine</h2>
        {bankOne.map((clip) => (
          <Pad
            clip={clip}
            key={clip.id}
            volume={volume}
            setRecording={setRecording}
          />
        ))}
        <br />
        <h4>Volume</h4>
        <input
          type='range'
          step='0.01'
          onChange={(e) => setVolume(e.target.value)}
          value={volume}
          max='1'
          min='0'
          className='w-50'
        />
        <h3>{recording}</h3>
        {recording && (
          <>
            <button onClick={playRecording} className='btn btn-success'>
              play
            </button>
            <button onClick={() => setRecording('')} className='btn btn-danger'>
              clear
            </button>
            <br />
            <h4>Speed</h4>
            <input
              type='range'
              step='0.01'
              onChange={(e) => setSpeed(e.target.value)}
              value={speed}
              max='1.2'
              min='0.1'
              className='w-50'
            />
          </>
        )}
      </div>
      <div className='text-center'>Created by Emiliano Kosh</div>
    </div>
  );
};

function Pad({ clip, volume, setRecording }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording((prev) => prev + clip.keyTrigger + ' ');
  };

  return (
    <div
      onClick={playSound}
      className={`btn btn-secondary p-4 m-3 ${active && 'btn-warning'}`}
    >
      <audio id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  );
}

export default DrumMachine;
