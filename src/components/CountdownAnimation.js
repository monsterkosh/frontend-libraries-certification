import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownAnimation = ({
  key = 1,
  timer = 20,
  animate = true,
  children,
}) => {
  return (
    <CountdownCircleTimer
      isPlaying={animate}
      key={key}
      duration={timer * 60}
      colors='#fe6f6b'
      strokeWidth={6}
      trailColor='#151932'
      onComplete={() => {
        //   stopAnimate()
      }}
    >
      {/* {children} */}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
