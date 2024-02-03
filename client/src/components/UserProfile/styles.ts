import styled from "styled-components";

export const UserProfileMain = styled.div`
    display: flex;
    width: 100%;
    padding:20px 20px 0px 20px;
    flex-flow: row wrap;
    justify-content: flex-start;
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