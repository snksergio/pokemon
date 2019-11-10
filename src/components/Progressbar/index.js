import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBarItem, ProgressBarStyled, ProgressBarText } from './style';

const ProgressBar = ({ title, value, percent }) => {
  return (
    <ProgressBarStyled>
      <ProgressBarText>{title}</ProgressBarText>
      <ProgressBarItem percent={percent} />
      <ProgressBarText right>{value}</ProgressBarText>
    </ProgressBarStyled>
  );
};

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;
