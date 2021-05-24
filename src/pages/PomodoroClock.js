import React, { useContext, useEffect } from 'react';
import Button from '../components/Button';
import SetPomodoro from '../components/SetPomodoro';
import CountdownAnimation from '../components/CountdownAnimation';
import { SettingsContext } from '../context/SettingsContext';
import '../styles/PomodoroStyles.css';

const PomodoroClock = () => {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    settingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute,
  } = useContext(SettingsContext);

  useEffect(
    () => updateExecute(executing),
    [executing, startAnimate, updateExecute]
  );

  return (
    <div className='pomodoroContainer'>
      <h1>Pomodoro Clock</h1>
      <small>Be Productive</small>
      {pomodoro === 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className='labels'>
            <li>
              <Button
                title='Work'
                activeClass={executing.active === 'work' && 'active-label'}
                __callback={() => setCurrentTimer('work')}
              />
            </li>
            <li>
              <Button
                title='Short Break'
                activeClass={executing.active === 'short' && 'active-label'}
                __callback={() => setCurrentTimer('short')}
              />
            </li>
            <li>
              <Button
                title='Long Break'
                activeClass={executing.active === 'long' && 'active-label'}
                __callback={() => setCurrentTimer('long')}
              />
            </li>
          </ul>
          <Button
            title='Settings'
            __callback={settingBtn}
            activeClass={Button}
          />
          <div className='time-container'>
            <div className='time-wrapper'>
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className='button-wrapper'>
            <Button
              title='Start'
              activeClass={!startAnimate ? 'active' : undefined}
              __callback={startTimer}
            />
            <Button
              title='Pause'
              activeClass={startAnimate ? 'active' : undefined}
              __callback={pauseTimer}
            />
          </div>
        </>
      )}

      {/* <CountdownCircleTimer /> */}
    </div>
  );
};

export default PomodoroClock;
