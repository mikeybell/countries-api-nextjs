import { useState, useEffect, useCallback } from 'react';
import { Country } from '../../types';

interface CountryResult {
  error: string;
  borderCountries: Country[];
}

const useGetBorderCountries = (country: Country): CountryResult => {
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const [error, setError] = useState<string>('');

  // eslint-disable-next-line consistent-return
  const getCountry = useCallback(async (countryCode) => {
    try {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${countryCode}`,
      );
      if (!res.ok) throw new Error();
      const data = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-shadow
      setBorderCountries((borderCountries) => [...borderCountries, data]);
      return data;
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    if (country && country.borders) {
      country.borders.map((countryCode) => getCountry(countryCode));
    }

    return setBorderCountries([]);
  }, [country, getCountry]);

  return { borderCountries, error };
};

export default useGetBorderCountries;
