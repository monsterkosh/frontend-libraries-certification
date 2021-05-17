// @ts-nocheck
import React, { useState, useEffect } from 'react';
import '../styles/QMStyles.css';
import { FaTwitter } from 'react-icons/fa';
import COLORS_ARRAY from '../components/ColorsArray';

const QuoteMachine = () => {
  const quoteDB =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const defaultQuote = {
    quote: 'Winning isn’t everything, but wanting to win is.',
    author: 'Vince Lombardi',
  };

  const [quotesArray, setQuotesArray] = useState();
  const [randomQuote, setRandomQuote] = useState(defaultQuote);
  const [randomColor, setRandomColor] = useState('#333');

  async function fetchDB(quoteDB) {
    let response = await fetch(quoteDB);
    response = await response.json();
    setQuotesArray(response.quotes);
  }

  // console.log(quotesArray);

  const getRandomNumber = (array) => {
    let randomNum = Math.floor(Math.random() * array.length);
    return randomNum;
  };

  const handleNewQuote = (array) => {
    let randomQuoteNumber = getRandomNumber(array);
    let randomColorNumber = getRandomNumber(COLORS_ARRAY);
    console.log(randomQuoteNumber);
    setRandomQuote(array[randomQuoteNumber]);
    setRandomColor(COLORS_ARRAY[randomColorNumber]);

    console.log(randomQuote);
  };

  useEffect(() => {
    fetchDB(quoteDB);
  }, [quoteDB]);

  return (
    <div className='containerMachine'>
      <div
        className='quote-machine'
        style={{ backgroundColor: randomColor, color: 'black' }}
      >
        <div className='quoteBox' id='quote-box'>
          <div className='inside-box'>
            <div className='text' id='text'>
              <span className='double-quotes'>" </span>
              {randomQuote.quote}
              <span className='double-quotes'> "</span>
            </div>
            <div className='author' id='author'>
              - {randomQuote.author}
            </div>
            <div className='buttons'>
              <a
                href={`https://twitter.com/intent/tweet?text=${randomQuote.quote}-${randomQuote.author}&hashtags=quote`}
                id='tweet-quote'
                className='socials'
                style={{ color: randomColor }}
              >
                <FaTwitter size={20} />
              </a>

              <div className='new-quote' id='new-quote'>
                <button
                  className='new-quote-button'
                  onClick={() => handleNewQuote(quotesArray)}
                >
                  New quote
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='creator'>Created by Emiliano Kosh</div>
      </div>
    </div>
  );
};

export default QuoteMachine;
