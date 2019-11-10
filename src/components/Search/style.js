import styled from 'styled-components';

const SearchStyled = styled.div`
  width: 100%;
  & h3 {
    font-size: 4.5rem;
    line-height: 4.5rem;
    color: ${({ theme }) => theme.palette.text.main};
    @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
      font-size: 3rem;
      line-height: 3rem;
    }
  }
  & p {
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.text.light};
    @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
      font-size: 1.5rem;
    }
  }
`;

const SearchContent = styled.div`
  width: 100%;
  position: relative;
  margin-top: 45px;
  margin-bottom: 30px;
  & > img {
    position: absolute;
    bottom: 3px;
    right: -80px;
    @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
      height: auto;
      width: 140px;
      right: -50px;
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: solid 3px ${({ theme }) => theme.palette.primary.main};
  outline: none;
  font-size: 3.8rem;
  padding-bottom: 10px;
  font-weight: 600;
  &::placeholder {
    font-weight: 400;
    color: #cccccc;
  }
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    font-size: 2.2rem;
  }
`;

export { SearchStyled, SearchInput, SearchContent };
