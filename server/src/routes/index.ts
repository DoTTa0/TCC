import { Router } from 'express';
import userRouter from '../controllers/UserController';
import medicalHistoryRouter from '../controllers/MedicalProcedureController';
import checkinRouter from '../controllers/CheckinController';

const routers = Router();

routers.use('/users', userRouter);
routers.use('/medicalProcedures', medicalHistoryRouter);
routers.use('/checkin', checkinRouter);

export default routers;