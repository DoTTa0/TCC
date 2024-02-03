import { Link } from 'react-router-dom'
import styled from 'styled-components'


/* index.js */
export const SideMenuMain = styled.div`
`

export const SideBarBackground = styled.div`
    display: flex;
    width: 200px;
    height: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.25);
    justify-content: center;
    align-content: flex-start;
    flex-flow: row wrap;

`

export const SidebarWrap = styled.div`
    width: 100%;
`

export const LogoName = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 60%;
    font-size: 16px;
    font-weight: bold;
    color: #109CF1;
    margin-top: 10px;
    margin-bottom: 30px;
`

export const DivInfoUser = styled.div`
    display: flex;
    width: 100%
    justify-content: space-between;
    color: black;
    padding-left: 20px;
`

export const ImgProfile = styled.div`
    font-size: 32px;
    color: #152C70;
    margin-right: 10px;
    width: 20%;
`

export const InfoUser = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 60%;
    padding: 5px 0px;
`

export const TypeName = styled.span`
    color: black;
    width: 100%;
    font-size: 12px;

`

export const Email = styled.span`
    color: #999999;
    width: 100%;
    font-size: 10px;
`

export const SidebarLink = styled(Link)`
    display: flex;
    color: black;
    justify-content: space-between; 
    align-items: center;
    padding: 5px 5px 5px 20px;
    list-style: none;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    margin: 10px 0px;


    &:hover{
        color: #109CF1;
    }
`;

export const SidebarContent = styled.div`
    text-align: center;
`

export const SidebarLabel = styled.span`
    margin-left: 16px;
`;
