import React from 'react';
import PropTypes from 'prop-types';
import { SearchStyled, SearchInput, SearchContent } from './style';
import Button from '../Button';
import Pikachu from '../../assets/pikachu.png';

const Search = ({ onClick, onChange, placeholder, value }) => {
  return (
    <SearchStyled>
      <h3>Search</h3>
      <p>Busque pelo nome pokemon</p>
      <SearchContent>
        <img src={Pikachu} alt="" />
        <SearchInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </SearchContent>
      <Button onClick={onClick}>Search</Button>
    </SearchStyled>
  );
};

Search.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Search.defaultProps = {
  onChange: null,
  onClick: null,
  placeholder: 'Ditto, Charizard...',
  value: '',
};

export default Search;
