import styled, { keyframes } from 'styled-components';
import BackIcon from '../../../assets/ic-back.png';

const AnimationContainer = keyframes`
  0% { transform: translateY(50px); opacity: 0; }
  100% { transform: translateY(0px); opacity: 1; }
`;

const BackAnimation = keyframes`
  0% { transform: translateX(50px); opacity: 0; }
  100% { transform: translateY(0px); opacity: 1; }
`;

const ResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 95px;
  justify-content: center;
  position: relative;
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    padding: 0 20px 80px 20px;
  }
`;

const Head = styled.div`
  width: 100%;
  margin-top: 120px;
  margin-bottom: 80px;
  display: flex;
  animation: ${AnimationContainer} 0.35s 0.15s ease-in-out backwards;
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 50px;
  }
`;

const HeadTitle = styled.div`
  position: relative;
  flex: 1;
  z-index: 1;
  &:before {
    content: '#' attr(data-number);
    font-size: 2rem;
    position: absolute;
    top: -35px;
    left: 0;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text.constrast};
  }
  &:after {
    content: '#' attr(data-number);
    font-size: 15rem;
    position: absolute;
    top: -145px;
    left: -10px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.17);
    z-index: -1;
  }
  & > h1 {
    margin: 0;
    padding: 0;
    font-size: 4.5rem;
    line-height: 4.5rem;
    margin-bottom: 18px;
    margin-top: -5px;
    color: ${({ theme }) => theme.palette.text.constrast};
    font-weight: 600;
  }
  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;
    & li {
      height: 42px;
      line-height: 42px;
      padding: 0 30px;
      float: left;
      margin-right: 10px;
      border-radius: 6px;
      background: ${({ theme }) => theme.palette.text.constrast};
      color: #000;
      font-size: 16px;
      font-weight: 600;
      &:first-child {
        background: rgba(255, 255, 255, 0.2);
        color: ${({ theme }) => theme.palette.text.constrast};
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    &:after {
      top: -85px;
      left: 20px;
      font-size: 10rem;
    }
  }
`;

const HeadThumb = styled.div`
  width: 75px;
  height: 100px;
  border: solid 3px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-right: 25px;
  float: left;
  box-sizing: border-box;
  position: relative;
  & > img {
    position: absolute;
    top: 10px;
    right: -15px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    align-self: center;
    margin-bottom: 60px;
  }
`;

const PokeInfo = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-bottom: 80px;
  & > li {
    flex: 1;
    color: ${({ theme }) => theme.palette.text.constrast};
    font-size: 3.5rem;
    font-weight: 600;
    &:last-child {
      flex: 0;
    }
  }
  & h2 {
    font-size: 1.6rem;
    font-weight: 400;
  }
  animation: ${AnimationContainer} 0.35s 0.25s ease backwards;
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    margin-bottom: 40px;
    & > li {
      font-size: 2.5rem;
    }
    & h2 {
      font-size: 1.2rem;
    }
  }
`;

const ProgressContainer = styled.div`
  animation: ${AnimationContainer} 0.35s 0.4s ease backwards;
`;

const Back = styled.div`
  position: absolute;
  top: 20px;
  left: 95px;
  color: #fff;
  background: url(${BackIcon}) left center no-repeat;
  box-sizing: border-box;
  padding-left: 40px;
  z-index: 8;
  font-size: 2rem;
  font-weight: 600;
  transition: all ease 0.35s;
  cursor: pointer;
  &:hover {
    padding-left: 30px;
    opacity: 0.6;
  }
  & > span {
    display: block;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 1.4rem;
  }
  animation: ${BackAnimation} 0.35s 0.5s ease backwards;
  @media (max-width: ${({ theme }) => theme.sizes.mobile}) {
    margin: auto;
    top: auto;
    bottom: 0;
  }
`;

export {
  ResultStyled,
  PokeInfo,
  Head,
  HeadTitle,
  HeadThumb,
  ProgressContainer,
  Back,
};
