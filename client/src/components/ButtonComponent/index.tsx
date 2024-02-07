import React from "react";
import { Button } from "./styles";

interface ButtonComponentProps {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
  }
  
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, icon = null, onClick }) => {

    return (
        <>
            <Button onClick={onClick}>
                {text} {icon === null ? '' : <> &nbsp; &nbsp; &nbsp; {icon} </>}
            </Button>
        </>
    )
}

export default ButtonComponent;