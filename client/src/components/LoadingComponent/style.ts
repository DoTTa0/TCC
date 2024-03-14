import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Opacidade cinza */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Coloca o overlay acima de tudo */
`;

export const Spinner = styled.div`
  border: 4px solid rgba(240, 240, 240, 0.5);
  border-left-color: #152C70;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  z-index: 1000; /* Coloca o overlay acima de tudo */
  margin-left: 40px;
`;

export const Text = styled.div`
  margin-top: 10px;
  color: #fff; /* Cor do texto */
`;
