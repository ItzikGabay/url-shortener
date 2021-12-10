import React from 'react';
import css from './shorten.module.css';

export interface ShortenProps {}

export const Shorten: React.FC<ShortenProps> = ({}) => {
  return (
    <div className={css['shorten-container']}>
      <div className={css['shorten-link']}>
        <input type="text" id="link" placeholder="Insert link to shorten" />
        <button>lala</button>
      </div>
    </div>
  );
};

export default Shorten;
