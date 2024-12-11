'use client';  // Marking this file as a client component

import { useState, ChangeEvent } from 'react';
import { toWords } from 'number-to-words'; // Optional library for conversion

const Home = () => {
  const [number, setNumber] = useState<string>(''); // input is a string
  const [words, setWords] = useState<string>('');

  const handleConvert = () => {
    if (!isNaN(Number(number)) && number.trim() !== '') {
      const result = toWords(Number(number)); // Convert number to words
      setWords(capitalizeFirstLetter(result)); // Capitalize the first letter
    } else {
      setWords('Please enter a valid number');
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  // Function to capitalize the first letter of the string
  const capitalizeFirstLetter = (str: string): string => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Number to Words Converter</h1>
      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={handleInputChange}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleConvert} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Convert
      </button>
      <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
        {words && <p>Words: {words}</p>}
      </div>
    </div>
  );
};

export default Home;
