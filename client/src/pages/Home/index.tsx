import { CardCheckin, CardsRowCheckin, CardsRowUser, CardsSection, CardsUsers, HomeMain, TittleLabel } from "./styles";
import * as FaIcons from 'react-icons/fa'


const HomePage = () => {
    const handlerUser = (userType: string, id: string) => {
        localStorage.setItem('id', id)
        localStorage.setItem('userType', userType)
    }
    return (
    <div className="page">
        <HomeMain>
            <TittleLabel>Ecossistema</TittleLabel>
            <CardsSection>
                <CardsRowUser>
                    <CardsUsers to='/users' onClick={() => handlerUser('1', '1')}><FaIcons.FaHospitalUser /></CardsUsers>
                    <CardsUsers to='/medicalProcedures' onClick={() => handlerUser('2', '2')}><FaIcons.FaUserMd /></CardsUsers>
                    <CardsUsers to='/medicalProcedures' onClick={() => handlerUser('3', '3')}><FaIcons.FaUserNurse /></CardsUsers>
                    <CardsUsers to='/medicalProcedures' onClick={() => handlerUser('4', '4')}><FaIcons.FaUserInjured /></CardsUsers>
                </CardsRowUser>
                <CardsRowCheckin>
                    <CardCheckin to='/checkin'><FaIcons.FaUserCheck /></CardCheckin>
                </CardsRowCheckin>
            </CardsSection>

        </HomeMain>
    </div>
    )
}

export default HomePage;