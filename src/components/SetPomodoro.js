// @ts-nocheck
import React, { useState, useContext } from 'react';
import Button from './Button';
import '../styles/PomodoroStyles.css';
import { SettingsContext } from '../context/SettingsContext';

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingsContext);

  const [newTimer, setNewTimer] = useState({
    work: 3,
    short: 2,
    long: 1,
    active: 'work',
  });

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case 'longBreak':
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;

      default:
        break;
    }
    console.log(newTimer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
  };

  return (
    <div className='form-container'>
      <form noValidate>
        <div className='input-wrapper'>
          <input
            className='input'
            name='work'
            type='number'
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className='input'
            name='shortBreak'
            type='number'
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className='input'
            name='longBreak'
            type='number'
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <Button title='Set Timer' __callback={handleSubmit} />
      </form>
    </div>
  );
};

export default SetPomodoro;
