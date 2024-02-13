import styled from "styled-components"

export const Button = styled.button`
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
    
    &:hover {
        background-color: #109CF1;
    }

    &:disabled {
        background-color: grey;
        cursor: not-allowed;
    }
`