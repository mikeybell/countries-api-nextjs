import React from 'react';
import BorderButton from './BorderButton';
import styles from './styles/countryDetail.module.css';
import { Country } from '../types';

interface Props {
  borderCountries: Country[];
}

const BorderCountries = ({ borderCountries }: Props) => {
  const { listItem, value, borderButtons } = styles;

  return (
    <>
      <p className={listItem}>
        Border Countries:
        {borderCountries.length === 0 && <span className={value}> None</span>}
      </p>

      {borderCountries.length > 0 && (
        <div className={borderButtons}>
          {borderCountries.map((country: Country) => (
            <BorderButton key={country.numericCode} country={country} />
          ))}
        </div>
      )}
    </>
  );
};

export default BorderCountries;
