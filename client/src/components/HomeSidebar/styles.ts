import { Link } from 'react-router-dom'
import styled from 'styled-components'


/* index.js */
export const HomeSidebarMain = styled.div`
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
    
`

export const SidebarWrap = styled.div`
    width: 100%;
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    padding: 20px 0px;
    width: 100%;
    height: 90%;
    margin-bottom: 20px;

`

export const LogoItems = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: #152C70;
`

export const LogoIcon = styled(Link)`
    font-size: 80px;
    margin-bottom: 20px;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: #152C70;

`

export const LogoText = styled.div`
    font-size: 32px;
    font-weight: bold;
`
