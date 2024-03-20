import styled from 'styled-components';

export const CheckinMain = styled.div`
display: flex;
width: 100%;
padding:20px;
flex-flow: row wrap;
justify-content: flex-start;
`

export const FormCPF = styled.form`
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    width: 30%;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: white;
    align-items: center;
`
export const DivFormCPF = styled.div`
    position: relative;
    padding: 20px 0px 0px 10px;
    width: 100%;
`

export const InputCPF = styled.input`
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
        /*box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;*/
    }
       
`

export const LabelCPF = styled.label`
    color: black;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 10px;
    //top: 30px;
    top: 5px;
    //font-size: 16px;
    //color: #109CF1;
    font-style: italic;
    transition: 0.5s;

    ${InputCPF}:focus ~ & {
        /* top: 5px;
        font-size: 16px; */
        color: #109CF1;
        /* font-style: italic; */
    }
`

export const ButtonCPF = styled.button`
    width: 25%;
    height: 50px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 60px;
    text-transform: uppercase;
    color: #152C70;
    background: none;
    cursor: pointer;
    position: relative;
    margin-top: -15px;

    &:hover {
        color: #109CF1;
    }
`

interface BoxTableProps {
    init?: boolean;
  }

export const BoxTableInit = styled.div<BoxTableProps>`
    display: flex;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: darkgrey;
    margin-top: 30px;
    justify-content: ${({init}) => (init ? 'center': 'flex-start')};
    align-items: center;
    text-align: center;
    font-size: 40px;
    width: 100%;
    height: auto;
    flex-flow: column;
    padding: 50px 20px 100px 20px;
    background-color: white;

`

export const LabelWarning = styled.span`
    color: ${({color}) => color};
    font-size: 30px;
`

export const CircleIcon = styled.div`
    width: 40px;
    height: 40px;
    background-color: ${({color}) => color}; 
    border-radius: 50%;
    color: white;
    margin: 10px 0px;
`

export const SubTitle = styled.h3`
    width: 100%;
    color: #152C70;
`

export const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 20px;

`
