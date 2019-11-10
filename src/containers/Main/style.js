import styled, { keyframes } from 'styled-components';
import { SearchContainer } from './Search/style';

const SearchAnimation = keyframes`
  0% { transform: translateX(-250px); opacity: 0; }
  80% { transform: translateX(20px); opacity: 1; }
  100% { transform: translateX(0px); opacity: 1; }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  & ${SearchContainer} {
    @media (min-width: ${({ theme }) => theme.sizes.large}) {
      max-width: 40%;
    }
    animation: ${SearchAnimation} 0.35s ease-in-out backwards;
  }
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    flex-direction: column;
    overflow: auto;
    padding: 10px;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { Container };
