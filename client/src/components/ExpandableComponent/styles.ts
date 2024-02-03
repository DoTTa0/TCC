import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  animation: ${fadeIn} 0.3s ease forwards;
  width:100%;
`;

export const Title = styled.h3`
`;

interface HeaderProps {
    expanded?: boolean;
  }

export const Header = styled.div<HeaderProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 20px;
    color: #152C70;
    background-color: ${({expanded}) => (expanded ? '#9F9F9F': 'white')};
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    border-radius: 5px;
    
`

export const Icon = styled.div<HeaderProps>`
  font-size: 40px;
  margin-left: 5px;
  transition: transform 0.3s ease;
  ${({ expanded }) =>
    expanded &&
    css`
      transform: rotate(180deg);
    `}
`;

export const ContainerContent = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 20px;
    background-color: white;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-top: 5px;
    animation: ${fadeIn} 0.3s ease forwards;

`