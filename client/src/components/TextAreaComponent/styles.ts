import styled from "styled-components";

export const Main = styled.div`
    position: relative;
       
`
interface TextareaProps {
    height?: string
}

export const Textarea = styled.textarea<TextareaProps>`
    font-size: 12px;
    padding: 10px 0px 10px 0px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid black;
    background: transparent;
    color: black;
    transition: .5s;
    margin-bottom: 20px;
    /* height: ${({height = 'auto'}) => (height)} ; */
    &:focus {
        outline: none;
        border-bottom: 2px solid #109CF1;
    }
       
`

export const Label = styled.label`
    color: black;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    top: 0px;
    transition: 0.5s ease all;

    ${Textarea}:focus ~ & {
        top: -20px;
        font-size: 14px;
        color: #109CF1;
        font-style: italic;
    }
    
    ${Textarea}:valid ~ &{
        top: -20px;
        font-size: 14px;
        font-style: italic;
    }

    ${Textarea}:disabled ~ &{
        top: -20px;
        font-size: 14px;
        font-style: italic;
    }
`
