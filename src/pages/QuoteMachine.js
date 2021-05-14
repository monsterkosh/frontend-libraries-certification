import React, { useState } from 'react';
import '../styles/QMStyles.css';
import { FaTwitter, FaFacebook } from 'react-icons/fa';

const QuoteMachine = () => {
  // const quote =
  //   'It does not matter how slowly you go as long as you do not stop.';
  const author = 'author';
  const quoteDB =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const [quote, setQuote] = useState();

  async function fetchDB(quoteDB) {
    fetch(quoteDB)
      .then((response) => response.json())
      .then((data) => console.log(data));

    // await data.map() ??????????????
  }

  return (
    <div className='quote-machine'>
      <div className='quote-box' id='quote-box'>
        <div className='inside-box'>
          <div className='text' id='text'>
            <span>"</span>
            {quote}
            <span>"</span>
          </div>
          <div className='author' id='author'>
            - {author}
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
              <button onClick={() => fetchDB(quoteDB)}>new quote</button>
            </div>
          </div>
        </div>
      </div>
      <div className='creator'>Created by Emiliano Kosh</div>
    </div>
  );
};

export default QuoteMachine;
