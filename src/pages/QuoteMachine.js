import React, { useState, useEffect } from 'react';
import '../styles/QMStyles.css';
import { FaTwitter, FaFacebook } from 'react-icons/fa';
import QuoteBox from '../components/QuoteBox';

const QuoteMachine = () => {
  const quoteDB =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const defaultQuote = {
    quote: '',
    author: '',
  };

  const [quotesArray, setQuotesArray] = useState();
  const [randomQuote, setRandomQuote] = useState(defaultQuote);

  const randomNumber = (array) => {
    let randomNum = Math.floor(Math.random() * array.length);
    return randomNum;
  };

  async function fetchDB(quoteDB) {
    fetch(quoteDB)
      .then((response) => response.json())
      .then((data) => setQuotesArray(data));
  }

  const handleNewQuote = (quotesArray) => {
    let randomQuoteNumber = randomNumber(quotesArray.quotes);
    setRandomQuote(quotesArray.quotes[randomQuoteNumber]);
    console.log(randomQuote);
  };

  useEffect(() => {
    fetchDB(quoteDB);
  }, []);

  return (
    <div>
      {randomQuote.quote === '' ? (
        <div>NO</div>
      ) : (
        <QuoteBox randomQuote={randomQuote} handleNewQuote={handleNewQuote} />
      )}
    </div>
  );
};

export default QuoteMachine;
