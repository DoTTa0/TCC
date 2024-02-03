import React from "react";
import { TitleLabel } from "./styles";

interface TitleComponentProps {
    title: string;
  }
const TitleComponent: React.FC<TitleComponentProps> = ({ title })=> {
    return (
        <>
            <TitleLabel>{title}</TitleLabel>
        </>
    )
}

export default TitleComponent;