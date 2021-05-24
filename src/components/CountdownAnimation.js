import React, { useContext } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { SettingsContext } from '../context/SettingsContext';

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopTimer } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ['#fe6f6b', 0.33],
        ['#fe6f6b', 0.33],
        ['#fe6f6b', 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor='#151932'
      onComplete={() => {
        stopTimer();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
