import React, { useState, useContext, useEffect } from 'react';
import DownArrow from '../../../public/assets/down_arrow';
import { ThemeContext } from '../../Layout';
import styles from '../styles/regionFilter.module.css';
import { Country } from '../../types';

interface UseFilterRegionProps {
  countries: Country[];
  setCountriesList: (list: Country[]) => void;
}

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const useFilterRegion = ({
  countries,
  setCountriesList,
}: UseFilterRegionProps) => {
  const theme = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [region, setRegion] = useState<string>('All');

  useEffect(() => {
    const filteredCountries = countries.filter((country: Country) => {
      if (region === 'All') return true;
      return country.region === region;
    });
    setCountriesList(filteredCountries);
  }, [region]);

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleRegionSelect = (selectedRegion: string): void => {
    setRegion(selectedRegion);
    setShowMenu(false);
  };

  const iconColor = theme === 'light' ? '#000' : '#FFF';

  const {
    toggleButton, buttonGroup, regionButton, container,
  } = styles;

  const FilterRegion = () => (
    <div className={container}>
      <button
        className={toggleButton}
        onClick={toggleMenu}
        type="button"
      >
        {region === 'All' ? 'Filter by Region' : region}
        <DownArrow color={iconColor} />
      </button>
      {showMenu && (
      <div className={buttonGroup}>
        {regions.map((item) => (
          <button
            className={regionButton}
            key={item}
            onClick={() => handleRegionSelect(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      )}
    </div>
  );

  return { FilterRegion };
};

export default useFilterRegion;
