import { HomeSidebarMain, Logo, LogoIcon, LogoItems, LogoText, SideBarBackground} from "./styles.ts"
import { GiHealing } from "react-icons/gi";


const HomeSidebar = () => {
    return (
       <HomeSidebarMain>
            <SideBarBackground>
                <Logo>
                    <LogoItems>
                        <LogoIcon>
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
    )
}

export default HomeSidebar;