import { useState, useEffect } from 'react';
import { Country } from '../../types';

interface Countries {
  error: string;
  countries: Country[];
}

const useGetAllCountries = (): Countries => {
  const [countries, setCountries] = useState<[]>([]);
  const [error, setError] = useState<string>('');

  const getAllCountries = async () => {
    try {
      const res = await fetch('https://restcountries.eu/rest/v2/all');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return { countries, error };
};

export default useGetAllCountries;
