import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import SetPomodoro from '../components/SetPomodoro';
import '../styles/PomodoroStyles.css';

const PomodoroClock = () => {
  return (
    <div className='pomodoroContainer'>
      <h1>Pomodoro Clock</h1>
      <small>Be Procutive</small>
      {/* <SetPomodoro /> */}
      {/* <CountdownCircleTimer /> */}
    </div>
  );
};

export default PomodoroClock;
