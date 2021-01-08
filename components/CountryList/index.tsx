import React, { useEffect, useState } from 'react';
import Card from './Card';
import Loader from '../Loader';
import useGetAllCountries from './hooks/useGetAllCountries';
import useFilterRegion from '../Controls/hooks/useFilterRegion';
import useSearchInput from '../Controls/hooks/useSearchInput';
import SearchInput from '../Controls/SearchInput';
import { Country } from '../types';
import styles from './styles/countryList.module.css';

const CountryList = () => {
  const [countriesList, setCountriesList] = useState<Country[]>([]);

  const { countries, error } = useGetAllCountries();
  const { FilterRegion } = useFilterRegion({ countries, setCountriesList });
  const { handleSearchInput } = useSearchInput({ countries, setCountriesList });

  const { container, list, controls } = styles;

  useEffect(() => {
    if (countries) setCountriesList(countries);
  }, [countries]);

  if (error) return <p>{error}</p>;
  if (countries.length === 0 && !error) return <Loader />;

  return (
    <div className={container}>
      <section className={controls}>
        <SearchInput onChange={handleSearchInput} />
        <FilterRegion />
      </section>
      <ul className={list}>
        {countriesList.map((country) => (
          <li key={country.name}>
            <Card
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
