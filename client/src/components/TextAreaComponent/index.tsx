import React, { Dispatch } from "react";
import { Label, Main, Textarea } from "./styles";

interface TextAreaComponentProps {
    title: string;
    required?: boolean;
    col?: number
    value: string;
    setValue: Dispatch<React.SetStateAction<string>>;
}


const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ title, required = true, col = 5,value, setValue }) =>{
    return(
        <Main>
            <Textarea 
            required={required} 
            value={value} 
            rows={col}
            onChange={(event) => setValue(event.target.value)} />
            
            <Label>{title}</Label>
        </Main>

    ) 
}

export default TextAreaComponent;