import { Country } from '../components/types';

export const getAllCountries = async () => {
  let result = {
    countries: [],
    error: null,
  };

  try {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    if (!res.ok) throw new Error();
    const data = await res.json();
    result = {
      countries: data,
      error: null,
    };
  } catch (err) {
    result = {
      countries: null,
      error: err.message,
    };
  }

  return result;
};

export const getCountryDataByName = async (name: string) => {
  // removes accented characters
  const formmattedName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  let result = {
    country: {},
    error: null,
  };

  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${formmattedName}`,
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    result = {
      country: data[0],
      error: null,
    };
  } catch (err) {
    result = {
      country: null,
      error: err.message,
    };
  }

  return result;
};

export const getCountryDataByCode = async (countryCode: string) => {
  let result = {
    country: {},
    error: null,
  };

  try {
    const res = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${countryCode}`,
    );
    if (!res.ok) throw new Error();
    const data = await res.json();
    result = {
      country: data,
      error: null,
    };
  } catch (err) {
    result = {
      country: null,
      error: err.message,
    };
  }

  return result;
};

export const getBorderCountries = async (country: Country) => {
  if (!country.borders) return null;

  const borderCountries = await Promise.all(country.borders.map(async (code) => {
    const res = await getCountryDataByCode(code);
    return res.country;
  }));

  return borderCountries;
};
