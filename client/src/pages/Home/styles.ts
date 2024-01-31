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
  width: 200px;
  height: 180px ;
  padding: 20px;
  border:none;
  border-radius: 10px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  outline:none;
  color: #152C70;
  font-size: 50px;

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
margin: 50px 0px;
`

export const CardCheckin = styled.button`
  width: 600px;
  height: 180px;
  padding: 20px;
  border:none;
  border-radius: 10px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
  outline:none;
  color: #152C70;
  font-size: 50px;

  &:hover{
        background: #152C70;
        color: #fff;
    }
`
