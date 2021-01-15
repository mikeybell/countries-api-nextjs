import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import {
  getAllCountries,
  getCountryDataByName,
  getBorderCountries,
} from '../../lib/fetch';
import Layout from '../../components/Layout';
import CountryDetail from '../../components/CountryDetail';
import { Country } from '../../components/types';

interface PostProps {
  borderCountries: Country[];
  country: Country | null;
  error: string | null;
}

export default function CountryPage({ borderCountries, country, error }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{country.name}</title>
      </Head>
      <CountryDetail
        borderCountries={borderCountries}
        country={country}
        error={error}
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { countries } = await getAllCountries();
  const paths = countries.map((country) => ({
    params: { name: country.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { country, error } = await getCountryDataByName(params.name as string);
  const borderCountries = await getBorderCountries(country as Country);

  return {
    props: {
      borderCountries,
      country,
      error,
    },
  };
};
