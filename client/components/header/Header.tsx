import React from 'react';
import Button from '../UI/button/Button';
import css from './header.module.css';

export const Header: React.FC = ({}) => {
  return (
    <div className={css['header-container']}>
      <div className={css['header-left']}>
        <div className={css['header-title']}>URL Shortener</div>
        <div className={css['header-description']}>
          Here you will do magics with your URL
        </div>
        <Button text="Generate" />
      </div>
      <div className={css['header-right']}>
        <div className={css['header-img']}>
          <img
            src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="dev"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
