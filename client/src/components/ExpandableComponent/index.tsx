import React, { useState } from 'react';
import { Wrapper, Content, Title, Header, Icon, ContainerContent } from './styles';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface ExpandableComponentProps {
  title: string;
  children: React.ReactNode;
  expand?: boolean;
}

const ExpandableComponent: React.FC<ExpandableComponentProps> = ({ title, children, expand = true }) => {
  const [expanded, setExpanded] = useState(expand);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Wrapper>
        <Header expanded={expanded} onClick={toggleExpanded}>
            <Title >{title}</Title>
            <Icon expanded={expanded}><MdKeyboardArrowDown /></Icon>
        </Header>
        {expanded &&
            <ContainerContent>
                <Content>{children}</Content>
            </ContainerContent>
         } 
    </Wrapper>
  );
};

export default ExpandableComponent;
