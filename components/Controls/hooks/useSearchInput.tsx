import { useState, useEffect, ChangeEvent } from 'react';
import { Country } from '../../types';

interface UseSearchInputProps {
  countries: Country[];
  setCountriesList: (list: Country[]) => void;
}

const useSearchInput = ({
  countries,
  setCountriesList,
}: UseSearchInputProps) => {
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (search !== '') {
      const result = countries.filter(
        (country) => country.name
          .toLowerCase()
          .includes(search.toLocaleLowerCase()),
      );
      setCountriesList(result);
    }

    if (search === '') setCountriesList(countries);
  }, [search]);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return { handleSearchInput };
};

export default useSearchInput;
