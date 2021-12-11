import { json } from 'node:stream/consumers';
import React, { useRef, useState } from 'react';
import css from './shorten.module.css';

export interface ShortenProps {}

export const Shorten: React.FC<ShortenProps> = ({}) => {
  // const linkInput: any = useRef(null);
  const [linkInput, setLinkInput] = useState('');

  const buttonHandler = async () => {
    const userInputStringified = JSON.stringify({ url: linkInput });

    const rawResponse = await fetch('http://localhost:5000/shorten', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: userInputStringified,
    });

    const content = await rawResponse.json();
    if (content.error) return setLinkInput(content.error);
    setLinkInput(content.shorten);
  };

  return (
    <div className={css['shorten-container']}>
      <div className={css['shorten-link']}>
        <input
          type="text"
          id="link"
          placeholder="Insert link to shorten"
          value={linkInput}
          onChange={(event) => setLinkInput(event.target.value)}
        />
        <button onClick={() => buttonHandler()}>Generate your link</button>
      </div>
    </div>
  );
};

export default Shorten;
