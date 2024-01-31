import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import HomePage from "../pages/Home";
import HomeSidebar from "../components/HomeSidebar";
import UsersPage from "../pages/Users";
import MedicalProcedeuresPage from "../pages/MedicalProcedures";
import ReferralPage from "../pages/Referral";
import CheckinPage from "../pages/Checkin";
import Sidemenu from "../components/Sidemenu";


const Main = () => {
    const pathname = window.location.pathname;
    const sidebarComponent = pathname === '/' || pathname === '/checkin' ?  <HomeSidebar/> : <Sidemenu />
    return (
        <Router>
           {sidebarComponent}
            <Routes>
                <Route path='/' Component={HomePage} ></Route>
                <Route path='/checkin' Component={CheckinPage} ></Route>            
                <Route path='/users' Component={UsersPage} ></Route>
                <Route path='/medicalProcedures' Component={MedicalProcedeuresPage} ></Route>
                <Route path='/referral' Component={ReferralPage} ></Route>
            </Routes>
        </Router>
    );
}

export default Main;