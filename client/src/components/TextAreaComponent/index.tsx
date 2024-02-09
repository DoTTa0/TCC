import React, { Dispatch } from "react";
import { Label, Main, Textarea } from "./styles";

interface TextAreaComponentProps {
    title: string;
    required?: boolean;
    col?: number
    value: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue?: Dispatch<React.SetStateAction<any>>;
    disable?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object?: any;
    nameObject?: string;
}


const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ title, required = true, col = 5,value, setValue = () =>{}, disable = false, object, nameObject = '' }) =>{
    return(
        <Main>
            <Textarea 
            required={required}
            disabled={disable} 
            value={value} 
            rows={col}
            onChange={(event) => setValue({...object, [nameObject]: event.target.value})} />
            
            <Label>{title}</Label>
        </Main>

    ) 
}

export default TextAreaComponent;