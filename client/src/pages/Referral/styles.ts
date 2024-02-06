import styled from "styled-components";
import InputMask from 'react-input-mask';

export const ReferralMain = styled.div`
display: flex;
width: 100%;
padding:20px;
flex-flow: row wrap;
justify-content: flex-start;
`

export const TimePickerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  margin: 40px 0px;
`;

export const DivTime = styled.div`
    background-color: white;
    width: 10%;
    padding: 30px 15px 0px 10px;
    border-radius: 5px;
    margin-right: 20px;
    display: flex;
`

export const TimeInput = styled(InputMask)`
    font-size: 18px;
    padding: 10px 0px 10px 0px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid black;
    background: transparent;
    color: black;
    transition: .5s;
    margin-bottom: 20px;
    &:focus {
        outline: none;
        border-bottom: 2px solid #109CF1;
    }
`;

export const TimeLabel = styled.label`
    color: black;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    top: 10px;
    transition: 0.5s ease all;

    ${TimeInput}:focus ~ & {
        font-size: 14px;
        color: #109CF1;
        font-style: italic;
    }
    
    ${TimeInput}:valid ~ &{
        font-size: 14px;
        font-style: italic;
    }
`

export const ReferralButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #152C70;
    width: 20%;
    height: 50px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    font-weight: bold;
    margin-left: 80px;
    &:hover {
        background-color: #109CF1;
    }
`

export const StopButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
    width: 20%;
    height: 50px;
    border: 2px solid #152C70;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
    text-transform: uppercase;
    color: #152C70;
    cursor: pointer;
    font-weight: bold;
    margin-left: 80px;

    &:hover {
        background-color: #152C70;

        color: white;
    }
`