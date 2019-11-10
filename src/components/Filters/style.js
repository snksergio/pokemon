import styled, { css, keyframes } from 'styled-components';

const AnimationFade = keyframes`
  from { transform: translateY(85px); opacity: 0; }
  to { transform: translateY(0px); opacity: 1; }
`;

const FilterStyled = styled.div`
  height: 42px;
  line-height: 42px;
  padding: 0 30px;
  font-size: 1.6rem;
  font-weight: 700;
  border: solid 2px #e5e5e5;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  box-sizing: border-box;
  transition: all ease 0.25s;
  background: #fff;
  animation: ${AnimationFade} ${props => props.time}s ease backwards;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    transform: translateY(-10px) scale(1.05);
  }
  &:active {
    transform: translateY(0px);
  }
  ${props =>
    props.checked &&
    css`
       {
        background: ${({ theme }) => theme.button.background};
        color: ${({ theme }) => theme.button.color};
        border-color: ${({ theme }) => theme.button.background};
      }
    `};
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    height: 35px;
    line-height: 35px;
    padding: 0 15px;
    font-size: 1.4rem;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { FilterStyled };
