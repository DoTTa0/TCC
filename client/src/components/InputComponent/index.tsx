import React, { Dispatch } from "react";
import { Input, Label, Main } from "./styles";

interface InputComponentProps {
    title: string;
    required?: boolean;
    type?: string;
    value: string;
    setValue: Dispatch<React.SetStateAction<string>>;
}


const InputComponent: React.FC<InputComponentProps> = ({ title, required = true, type = 'text', value, setValue }) =>{
    return(
        <Main>
            <Input 
            required={required} 
            type={type} 
            value={value} 
            onChange={(event) => setValue(event.target.value)} />
            <Label>{title}</Label>
        </Main>

    ) 
}

export default InputComponent;