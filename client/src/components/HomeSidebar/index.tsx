import { useLocation } from "react-router-dom";
import { HomeSidebarMain, Logo, LogoIcon, LogoItems, LogoText, SideBarBackground} from "./styles.ts"
import { GiHealing } from "react-icons/gi";


const HomeSidebar = () => {
    const path = useLocation().pathname;

    return (
        <>
            {path === '/'  || path === '/checkin'? 
            <HomeSidebarMain>
                <SideBarBackground>
                    <Logo>
                        <LogoItems>
                            <LogoIcon to='/'>
                                <GiHealing />
                            </LogoIcon>
                        </LogoItems>
                        <LogoItems>
                            <LogoText>
                                CheckInMed
                            </LogoText>
                        </LogoItems>
                    </Logo>
                </SideBarBackground>
            </HomeSidebarMain>
            : null   
            }
        
        </>
       
    )
}

export default HomeSidebar;