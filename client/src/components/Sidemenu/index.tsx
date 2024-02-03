import { GiHealing } from "react-icons/gi";
import { DivInfoUser, Email, ImgProfile, InfoUser, LogoName, SideBarBackground, SideMenuMain, SidebarContent, SidebarLabel, SidebarLink, TypeName } from "./styles"
import {  FaUserCircle } from "react-icons/fa";
import SidemenuData from "./SidemenuData";
import { TiThMenu } from "react-icons/ti";

const Sidemenu = () => {
    return (
        <SideMenuMain>
            <SideBarBackground>
                <LogoName> <GiHealing /> <span>CheckInMed</span></LogoName>
                <DivInfoUser>
                    <ImgProfile><FaUserCircle /></ImgProfile>
                    <InfoUser>
                        <TypeName> Médico - Manuel</TypeName>
                        <Email>example@example.com</Email>
                    </InfoUser>
                </DivInfoUser>
                <div>
                {SidemenuData.map((item, index) => {
                            return (
                                <SidebarLink key={index} to={item.path}>
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
    )
}

export default Sidemenu;