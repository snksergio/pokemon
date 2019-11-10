import styled, { css, keyframes } from 'styled-components';

const ProgressBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

const ProgressBarText = styled.div`
  width: 50px;
  color: ${({ theme }) => theme.palette.text.constrast};
  font-size: 1.6rem;
  font-weight: 500;
  ${props =>
    props.right &&
    css`
       {
        text-align: right;
      }
    `};
`;

const AnimationBar = keyframes`
  from { width: 0%; }
`;

const ProgressBarItem = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  height: 12px;
  overflow: hidden;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    animation: ${AnimationBar} 0.65s ease backwards;
    width: ${props => props.percent}%;
    height: 100%;
    border-radius: 6px;
    background: ${({ theme }) => theme.palette.text.constrast};
    transition: all ease 0.35s;
  }
`;

export { ProgressBarStyled, ProgressBarItem, ProgressBarText };
