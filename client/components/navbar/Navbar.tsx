import React from 'react';
import Button from '../UI/button/Button';
import css from './navbar.module.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export const Navbar: React.FC = () => {
  return (
    <nav className={css['nav-container']}>
      <div className={css['navbar-wrapper']}>
        <div className={css['navbar-left']}>
          <p>
            <IoIosArrowDroprightCircle />
            Shorten
          </p>
        </div>
        <div className={css['navbar-right']}>
          <ul className={css['navbar-links']}>
            <li>Generate link</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
