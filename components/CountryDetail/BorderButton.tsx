/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import styles from './styles/borderButton.module.css';
import { Country } from '../types';

interface BorderButtonProps {
  country: Country;
}

const BorderButton = ({ country }: BorderButtonProps) => {
  const { button } = styles;

  return (
    <Link href={`/countries/${country.name}`}>
      <a className={button}>
        {country.name}
      </a>
    </Link>
  );
};

export default BorderButton;
