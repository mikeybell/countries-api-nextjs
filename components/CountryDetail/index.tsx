import React from 'react';
import BorderCountries from './BorderCountries';
import BackButton from './BackButton';
import Loader from '../Loader';
import getArrayValues from './utils';
import styles from './styles/countryDetail.module.css';
import { Country } from '../types';

interface CountryDetailProps {
  borderCountries: Country[];
  country: Country | null;
  error: string | null;
}

const CountryDetail = ({
  borderCountries,
  country,
  error,
}: CountryDetailProps) => {
  const {
    container,
    infoContainer,
    detailsContainer,
    img,
    header,
    columns,
    borderCountriesStyle,
    value,
    listItem,
    flagStyle,
  } = styles;

  if (error) return <p>{error}</p>;
  if (!country.name && !error) return <Loader />;

  const {
    capital,
    currencies,
    flag,
    languages,
    name,
    nativeName,
    population,
    region,
    subregion,
    topLevelDomain,
  } = country;

  return (
    <div className={container}>
      <BackButton />
      <article className={infoContainer}>
        <div className={flagStyle}>
          <img className={img} src={flag} alt={`The flag of ${name}`} />
        </div>
        <div className={detailsContainer}>
          <h2 className={header}>{name}</h2>
          <div className={columns}>
            <ul>
              <li className={listItem}>
                Native Name:
                <span className={value}>
                  {' '}
                  {nativeName}
                </span>
              </li>
              <li className={listItem}>
                Population:
                <span className={value}>
                  {' '}
                  {population.toLocaleString('en')}
                </span>
              </li>
              <li className={listItem}>
                Region:
                <span className={value}>
                  {' '}
                  {region}
                </span>
              </li>
              <li className={listItem}>
                Sub Region:
                <span className={value}>
                  {' '}
                  {subregion}
                </span>
              </li>
              <li className={listItem}>
                Capital:
                <span className={value}>
                  {' '}
                  {capital}
                </span>
              </li>
            </ul>
            <ul>
              <li className={listItem}>
                Top Level Domain:
                <span className={value}>
                  {' '}
                  {topLevelDomain}
                </span>
              </li>
              <li className={listItem}>
                Currencies:
                <span className={value}>{getArrayValues(currencies)}</span>
              </li>
              <li className={listItem}>
                Languages:
                <span className={value}>{getArrayValues(languages)}</span>
              </li>
            </ul>
          </div>
          <div className={borderCountriesStyle}>
            <BorderCountries borderCountries={borderCountries} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default CountryDetail;
