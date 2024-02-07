import styled from "styled-components";

export const UserDetailsMain = styled.div`
    display: flex;
    width: 100%;
    padding:20px;
    flex-flow: row wrap;
    justify-content: flex-start;
`

export const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 20px;

`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #152C70;
    width: 20%;
    height: 40px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
        background-color: #109CF1;
    }
`