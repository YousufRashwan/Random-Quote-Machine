import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      await fetch("https://dummyjson.com/quotes/random")
        .then((res) => res.json())
        .then(setQuote);
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote__box__wrapper">
      <div id="quote-box" className="quote__box">
        <div className="content__container">
          <h2 id="text">
            <FontAwesomeIcon icon={faQuoteLeft} /> {quote?.quote}
          </h2>
          <h3 id="author">- {quote?.author}</h3>
        </div>
        <div className="buttons__container">
          {quote && (
            <a
              href={`https://twitter.com/intent/tweet?text=${quote.quote}+By+${quote.author}`}
              target="_blank"
              id="tweet-quote"
            >
              <FontAwesomeIcon icon={faSquareTwitter} />
            </a>
          )}
          <button id="new-quote" onClick={fetchQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
