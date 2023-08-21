import React, { useState, useEffect } from 'react';

function Abyss() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
      headers: {
        'X-Api-Key': 'TIAm/t8vVyl1vPkLs9TKvA==WFhJHu3P3WuKdLJW',
      },
    })
      .then(response => response.json())
      .then(data => {
        setQuote(data[0]?.quote);
        setAuthor(data[0]?.author);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>The Abyss:</h1>
      <p>"{quote}" -{author}</p>
    </div>
  );
}

export default Abyss;
