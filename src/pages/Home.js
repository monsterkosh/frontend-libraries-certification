import React from 'react';
import '../styles/Styles.css';
import { Link } from 'react-router-dom';
import fcc from '../images/fcc.png';

const Home = () => {
  return (
    <div className='container'>
      <div className='image'>
        <img src={fcc} alt='logo' />
      </div>
      <div className='welcome-msg'>
        <div className='mainTitle'>
          <h1>Front End Libraries Certification</h1>
        </div>
        <br />
        <div className='list'>
          <ul>
            <p>
              <Link to='/quotemachine'>Random Quote Machine</Link>
            </p>
            <p>
              <Link to='/markdown'>Markdown Previewer</Link>
            </p>
            <p>
              <Link to='/markdown2'>Markdown Previewer 2 (test)</Link>
            </p>
            <p>
              <Link to='/drummachine'>Drum Machine</Link>
            </p>
            <p>
              <Link to='/drummachine2'>Drum Machine 2 (test)</Link>
            </p>
            <p>
              <Link to='/calculator'>JavaScript Calculator</Link>
            </p>
            <p>
              <Link to='/calculator2'>JavaScript Calculator 2 (test)</Link>
            </p>
            <p>
              <Link to='/pomodoroclock'>Pomodoro Clock</Link>
            </p>
            <p>
              <Link to='/pomodoroclock2'>Pomodoro Clock 2 (test)</Link>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
