import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function App () {

  const [randomDog, setRandomDog] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(json => setRandomDog(json.message))
      .catch(err => console.log(err))
  }, [])

  console.log(randomDog);

  const renderDog = randomDog === '' ? <p>Loading...</p> : <img alt="A Random Dog" src={randomDog} />;

  return <div>{renderDog}</div>
}

export default App;