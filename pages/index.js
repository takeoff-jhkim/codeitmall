import { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Head from 'next/head';

export async function getStaticProps() {
  const res = await axios.get('/products');
  const products = res.data.results;

  return {
    props: {
      products,
    }
  }
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>codeitmall</title>
        <link rel="icon" href='' />
      </Head>
      <Header />
      <Container>
        <SearchForm />
        <ProductList className={styles.products} products={products} />
      </Container>
    </>
  )
}
