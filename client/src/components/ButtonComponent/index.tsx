import React from "react";
import { Button } from "./styles";

interface ButtonComponentProps {
    text: string;
    icon?: React.ReactNode;
  }
  
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, icon = null }) => {

    return (
        <>
            <Button>
                {text} {icon === null ? '' : <> &nbsp; &nbsp; &nbsp; {icon} </>}
            </Button>
        </>
    )
}

export default ButtonComponent;