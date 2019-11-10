import styled from 'styled-components';
import { SearchStyled } from '../../../components/Search/style';

const SearchContainer = styled.div`
  flex: 1;
  max-width: 645px;
  height: 100%;
  display: flex;
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
  flex-direction: column;
  padding: 50px 90px 50px 60px;
  box-sizing: border-box;
  position: relative;
  justify-content: center;
  align-items: center;
  & ${SearchStyled} {
    margin-top: auto;
  }
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    min-height: calc(100vh - 20px);
    padding: 20px;
  }
`;

const GitIcon = styled.img`
  position: absolute;
  top: 25px;
  left: 25px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  padding: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: auto;
  & h4 {
    flex: 1;
    font-size: 2rem;
    min-width: 100%;
    margin-bottom: 10px;
  }
`;

export { Container, SearchContainer, FilterContainer, GitIcon };
