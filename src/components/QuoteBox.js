import React from 'react';
import '../styles/QMStyles.css';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const QuoteBox = ({ handleNewQuote, randomQuote }) => {
  return (
    <div className='quote-machine'>
      <div className='quote-box' id='quote-box'>
        <div className='inside-box'>
          <div className='text' id='text'>
            <span>"</span>
            {randomQuote.quote}
            <span>"</span>
          </div>
          <div className='author' id='author'>
            - {randomQuote.author}
          </div>
          <div className='buttons'>
            <div className='socials'>
              <button>
                <FaTwitter size={20} />
              </button>
              <button>
                <FaFacebook size={20} />
              </button>
            </div>
            <div className='new-quote'>
              <button onClick={() => handleNewQuote()}>new quote</button>
            </div>
          </div>
        </div>
      </div>
      <div className='creator'>Created by Emiliano Kosh</div>
    </div>
  );
};

export default QuoteBox;
