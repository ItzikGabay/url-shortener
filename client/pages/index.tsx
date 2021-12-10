import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header/Header';
import css from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={css['homepage-container']}>
      <Header />
    </div>
  );
};

export default Home;
