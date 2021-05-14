import React from 'react';
import '../styles/QMStyles.css';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const QuoteMachine = () => {
  return (
    <div className='quote-machine'>
      <div className='quote-box' id='quote-box'>
        <div className='text' id='text'>
          'It does not matter how slowly you go as long as you do not stop.'
        </div>
        <div className='author' id='author'>
          - author
        </div>
        <div className='buttons'>
          <div className='socials'>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaFacebook />
            </button>
          </div>
          <div className='new-quote'>
            <button>new quote</button>
          </div>
        </div>
      </div>
      <div className='creator'>Emiliano Kosh</div>
    </div>
  );
};

export default QuoteMachine;
