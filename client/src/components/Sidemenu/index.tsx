import { GiHealing } from "react-icons/gi";
import { DivInfoUser, Email, ImgProfile, InfoUser, LogoName, SideBarBackground, SideMenuMain, SidebarContent, SidebarLabel, SidebarLink, TypeName } from "./styles"
import {  FaUserCircle } from "react-icons/fa";
import SidemenuData from "./SidemenuData";
import { TiThMenu } from "react-icons/ti";
import { useLocation } from "react-router-dom";

const Sidemenu = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let getSideBarData:any[] = [];
    let type;

    const callLevelAccess = (typeUser: number) => {
        if (typeUser === 1) {
            getSideBarData = SidemenuData.filter((item) => item.title !== 'Perfil' && item.title !== 'Encaminhamento');
            type = 'Admin';
        }
        if (typeUser === 2) {
            getSideBarData = SidemenuData.filter((item) => item.title !== 'Usuários' && item.title !== 'Encaminhamento');
            type = 'Médico';
        }
        if (typeUser === 3) {
            getSideBarData = SidemenuData.filter((item) => item.title !== 'Usuários');
            type = 'Enfermeiro';
        }
        if (typeUser === 4) {
            getSideBarData = SidemenuData.filter((item) => item.title !== 'Usuários' && item.title !== 'Encaminhamento');
            type = 'Paciente';
        }
    }

    const path = useLocation().pathname;
    return (
        <>
            {callLevelAccess(Number(localStorage.getItem('userType')))}
            {path !== '/' && path !== '/checkin' ?
                <SideMenuMain>
                    <SideBarBackground>
                        <LogoName to='/'> <GiHealing /> <span>CheckInMed</span></LogoName>
                        <DivInfoUser>
                            <ImgProfile><FaUserCircle /></ImgProfile>
                            <InfoUser>
                                <TypeName> {type} </TypeName>
                                <Email>example@example.com</Email>
                            </InfoUser>
                        </DivInfoUser>
                        <div>
                        {getSideBarData.map((item, index) => {
                            let path = item.path;
                            if(item.title === 'Perfil') path = `${item.path}/${localStorage.getItem('id')}`;
                            return (
                            <SidebarLink key={index} to={path}>
                                <SidebarContent key={index}>
                                    <TiThMenu />
                                    <SidebarLabel>{item.title}</SidebarLabel>
                                </SidebarContent>
                            </SidebarLink>
                                )
                            })}
                        </div>
                    </SideBarBackground>
                </SideMenuMain>
                : null
            }
        </>

    )
}

export default Sidemenu;