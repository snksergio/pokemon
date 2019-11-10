import React, { useState } from 'react';
import { FilterStyled } from './style';

const Filter = ({ label, defaultValue, onChange, time }) => {
  const [state, setState] = useState(!!defaultValue);
  const isChecked = !!state;
  const toggle = () => {
    setState(!state);
    if (onChange) {
      onChange(!state);
    }
  };
  return (
    <FilterStyled checked={isChecked} time={time} onClick={toggle}>
      {label}
    </FilterStyled>
  );
};

export default Filter;
