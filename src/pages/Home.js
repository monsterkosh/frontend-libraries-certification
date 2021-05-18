import React from 'react';
import '../styles/HomeStyles.css';
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
        <div className='list'>
          <ul>
            <p>
              <Link to='/quotemachine'>Random Quote Machine</Link>
            </p>
            <p>
              <Link to='/'>Markdown Previewer</Link>
            </p>
            <p>
              <Link to='/'>Drum Machine</Link>
            </p>
            <p>
              <Link to='/'>JavaScript Calculator</Link>
            </p>
            <p>
              <Link to='/'>25 + 5 Clock</Link>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
