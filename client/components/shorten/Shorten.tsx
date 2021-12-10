import React, { useRef, useState } from 'react';
import css from './shorten.module.css';

export interface ShortenProps {}

export const Shorten: React.FC<ShortenProps> = ({}) => {
  // const linkInput: any = useRef(null);
  const [linkInput, setLinkInput] = useState('');

  const buttonHandler = () => {


    setLinkInput('RESULT FROM THE API');
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
