import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeMain = styled.div`
display: flex;
width: 100%;
padding:20px;
flex-flow: row wrap;
justify-content: flex-start;
`
export const TittleLabel = styled.span`
color: #152C70;
margin-bottom: 15px;
font-size: 2rem;
width: 100%;
font-weight: bold;
`
export const CardsSection = styled.div`
display: flex;
flex-flow: column nowrap;
width: 100% ;
height: 100%;
justify-content: center;
align-items: flex-start;
margin: 30px 0px;
`
export const CardsRowUser = styled.div`
display: flex;
flex-flow: row nowrap;
width: 100% ;
justify-content: space-between;
`

export const CardsUsers = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 30%;
  height: 100%;
  padding: 20px;
  border:none;
  border-radius: 10px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  outline:none;
  color: #152C70;
  font-size: 80px;
  margin: 50px;

  &:hover{
        background: #152C70;
        color: #fff;
    }
`

export const CardsRowCheckin = styled.div`
display: flex;
flex-flow: row nowrap;
width: 100% ;
justify-content: center;
margin: 100px 0px;
`

export const CardCheckin = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 50%;
  height: 100%;
  padding: 20px;
  border:none;
  border-radius: 10px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  outline:none;
  color: #152C70;
  font-size: 80px;
  margin: 50px;
  text-decoration: none;

  &:hover{
        background: #152C70;
        color: #fff;
    }
`


export const FormCPF = styled.form`
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    width: 100%;
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
export const NameCards = styled.span`
    font-size: 32px;
    width: 100%;
    text-align: center;
`
