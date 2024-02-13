import React from "react";
import { Button } from "./styles";

interface ButtonComponentProps {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    disable?: boolean;
  }
  
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, icon = null, onClick, disable = false }) => {

    return (
        <>
            <Button onClick={onClick} disabled={disable}>
                {text} {icon === null ? '' : <> &nbsp; &nbsp; &nbsp; {icon} </>}
            </Button>
        </>
    )
}

export default ButtonComponent;