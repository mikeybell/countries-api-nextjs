import { useState, useEffect, useCallback } from 'react';
import { Country } from '../../types';
import { EMPTY_COUNTRY } from '../../constants';

interface CountryResult {
  error: string;
  country: Country;
}

const useGetCountryByName = (slug: string): CountryResult => {
  const [country, setCountry] = useState<Country>(EMPTY_COUNTRY);
  const [error, setError] = useState<string>('');
  const countryName = slug.replaceAll('-', ' ');

  const getCountry = useCallback(async () => {
    try {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${countryName}`,
      );
      if (!res.ok) throw new Error();
      const data = await res.json();
      setCountry(data[0]);
    } catch (err) {
      setError(err.message);
    }
  }, [countryName]);

  useEffect(() => {
    getCountry();
  }, [getCountry]);

  return { country, error };
};

export default useGetCountryByName;
