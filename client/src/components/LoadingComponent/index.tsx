import React from 'react';
import { Overlay, Spinner, Text } from './style';

interface LoadingProps {
  text?: string;
}


const Loading: React.FC<LoadingProps> = ({ text = 'Loading...' }) => {
  return (
    <Overlay>
      <div style={{ textAlign: 'center' }}>
        <Spinner role="status" />
        <Text>{text}</Text>
      </div>
    </Overlay>
  );
};

export default Loading;
