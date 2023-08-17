import React, { ChangeEvent } from 'react';
import styles from './SearchBar.module.scss';
import { useSearchParams } from 'react-router-dom';

export const SearchBar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    if (query) {
      searchParams.set('query', query);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);
  };

  return (
    <div className={styles['search-bar']}>
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        onChange={handleQueryChange}
      />
    </div>
  );
};
