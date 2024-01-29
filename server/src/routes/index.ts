import { Router } from 'express';
import userRouter from '../controllers/UserController';
import medicalHistoryRouter from '../controllers/MedicalProcedureController';
import checkinRouter from '../controllers/CheckinController';
import referralRouter from '../controllers/ReferralController';
import examesRouter from '../controllers/ExamesController';

const routers = Router();

routers.use('/users', userRouter);
routers.use('/medicalProcedures', medicalHistoryRouter);
routers.use('/checkin', checkinRouter);
routers.use('/referral', referralRouter);
routers.use('/exames', examesRouter);

export default routers;