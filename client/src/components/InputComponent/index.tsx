import React, { Dispatch } from "react";
import { Input, Label, Main } from "./styles";

interface InputComponentProps {
    title: string;
    required?: boolean;
    type?: string;
    value: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue?: Dispatch<React.SetStateAction<any>>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object?: any;
    nameObject?: string;
    disable?: boolean;
}


const InputComponent: React.FC<InputComponentProps> = ({ title, required = true, type = 'text', value, setValue = () => {}, object, nameObject = '', disable = false }) =>{
    return(
        <Main>
            <Input 
            required={required} 
            type={type} 
            disabled={disable}
            value={value} 
            onChange={(event) => object ? setValue({...object, [nameObject]: event.target.value}) : setValue(event.target.value)} />
            <Label>{title}</Label>
        </Main>

    ) 
}

export default InputComponent;