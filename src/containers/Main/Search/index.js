import React from 'react';
import PropTypes from 'prop-types';
import { SearchContainer, FilterContainer, GitIcon } from './style';
import GitLogo from '../../../assets/logo-git.png';
import Search from '../../../components/Search';
import Filter from '../../../components/Filters';

const SearchView = ({ onChange, dataFilter, placeholder, value }) => {
  return (
    <SearchContainer>
      <GitIcon src={GitLogo} alt="" />
      <Search placeholder={placeholder} onChange={onChange} value={value} />
      <FilterContainer>
        <h4>Filters</h4>
        {dataFilter.map((item, index) => (
          <Filter
            key={item}
            time={index / 6}
            onChange={() => console.log({ index })}
            defaultValue={false}
            label={item}
          />
        ))}
      </FilterContainer>
    </SearchContainer>
  );
};

SearchView.propTypes = {
  onChange: PropTypes.func,
  dataFilter: PropTypes.array,
};

SearchView.defaultProps = {
  onChange: null,
  dataFilter: {},
};

export default SearchView;
