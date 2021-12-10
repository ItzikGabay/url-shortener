import React from 'react';
import Button from '../UI/button/Button';
import css from './navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <nav className={css['nav-container']}>
      <div className={css['navbar-left']}>
        <p>URL Shortener</p>
      </div>
      <div className={css['navbar-right']}>
        <ul className={css['navbar-links']}>
          <li>Click me</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
