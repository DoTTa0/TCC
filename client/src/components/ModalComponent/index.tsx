import React, { useEffect, useRef } from 'react';
import { ModalOverlay, ModalContent, CloseButton, DivButton } from './styles.ts';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  isOpen: boolean; 
}

const ModalComponent: React.FC<ModalProps> = ({  onClose, children, isOpen = false }) => {
  const modalRef = useRef<HTMLDivElement>(null); // Referência para o elemento do modal

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose(); // Fecha o modal se o clique for fora dele
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {(
        <ModalOverlay>
          <ModalContent ref={modalRef}>
            <DivButton>
                <CloseButton onClick={onClose}>Fechar</CloseButton>
            </DivButton>
            {children}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default ModalComponent;
