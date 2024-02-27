import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 30%;
`;

export const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CloseButton = styled.button`
  position: relative;
  top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;
