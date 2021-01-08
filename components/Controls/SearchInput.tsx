import React, { ChangeEvent } from 'react';
import styles from './styles/searchInput.module.css';

interface SearchInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ onChange }: SearchInputProps) => (
  <div className={styles.container}>
    <input
      className={styles.input}
      type="text"
      placeholder="Search"
      onChange={onChange}
    />
  </div>
);

export default SearchInput;
