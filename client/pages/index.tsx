import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import css from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={css["homepage-container"]}>
      <div>hello world</div>
    </div>
  );
};

export default Home;
