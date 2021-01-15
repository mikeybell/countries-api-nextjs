import { GetStaticProps } from 'next';
import React from 'react';
import Layout from '../components/Layout';
import CountryList from '../components/CountryList';
import { getAllCountries } from '../lib/fetch';
import { Country } from '../components/types';

interface HomeProps {
  countries: Country[] | null;
  error: string | null;
}

export default function Home({ countries, error }: HomeProps) {
  return (
    <Layout>
      <CountryList
        countries={countries}
        error={error}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { countries, error } = await getAllCountries();

  return {
    props: {
      countries,
      error,
    },
  };
};
