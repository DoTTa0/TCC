import styled from "styled-components";

export const MedicalProceduresDetailsMain = styled.div`
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

export const FormInfo = styled.form`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    width: 100%;
    align-items: center;
`

export const DivFormInfo = styled.div`
    padding: 20px 0px 0px 0px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

interface FormInfoItemProps {
    width?: string;
  }

export const FormInfoItem = styled.span<FormInfoItemProps>`
    width: ${({width = '100%'}) => width};
    margin-right: 30px;
`

interface CheckinProps {
    checkin: boolean;
  }

export const Checkin = styled.div<CheckinProps>`
  background-color: ${({checkin}) => checkin ? '#2ED47A' : 'red' };
  color: white;
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  top: -20px;
  position: relative;
  margin-left: 40px;
`;

export const CheckinLabel = styled.div`
    top: -25px;
    position: relative;
    margin-left: 40px;
`

export const ExamesInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-flow: column wrap;
    width: auto;
    align-content: flex-start;
    height: 150px;
`

export const DivExamesInfo = styled.div`
    padding: 10px;
    width: 10%;
    display: flex;
    justify-content: flex-start;
    border-bottom: 2px solid black;
    margin-right: 40px;
`

export const ButtonIcon = styled.button`
    background-color: white;
    border: none;
    outline: none;
    color: #152C70;
    cursor: pointer;
    position: absolute;
    top: 80px;
    
    &:hover {
        color: #109CF1;
    }
`
