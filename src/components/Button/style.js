import styled from 'styled-components';

const ButtonStyled = styled.button`
  height: 62px;
  line-height: 62px;
  padding: 0 52px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.button.color};
  background: ${({ theme }) => theme.button.background};
  font-size: 1.8rem;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 10px 15px -10px rgba(255, 88, 69, 0.55);
  transition: all ease 0.15s;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -10px rgba(255, 88, 69, 0.55);
  }
  &:active {
    transform: translateY(0px);
    box-shadow: 0 5px 10px -10px rgba(255, 88, 69, 0.55);
  }
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    width: 100%;
  }
`;

export default ButtonStyled;
