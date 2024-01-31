import { CardCheckin, CardsRowCheckin, CardsRowUser, CardsSection, CardsUsers, HomeMain, TittleLabel } from "./styles";
import * as FaIcons from 'react-icons/fa'


const HomePage = () => {
    return (
        <div className="home">
            <HomeMain>
                <TittleLabel>Ecossistema</TittleLabel>
                <CardsSection>
                    <CardsRowUser>
                        <CardsUsers><FaIcons.FaHospitalUser /></CardsUsers>
                        <CardsUsers><FaIcons.FaUserMd /></CardsUsers>
                        <CardsUsers><FaIcons.FaUserNurse /></CardsUsers>
                        <CardsUsers><FaIcons.FaUserInjured /></CardsUsers>
                    </CardsRowUser>
                    <CardsRowCheckin>
                        <CardCheckin><FaIcons.FaUserCheck /></CardCheckin>
                    </CardsRowCheckin>
                </CardsSection>

            </HomeMain>
        </div>
    )
}

export default HomePage;