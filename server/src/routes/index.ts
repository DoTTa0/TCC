import { Router } from 'express';
import userRouter from '../controllers/UserController';
import medicalHistoryRouter from '../controllers/MedicalProcedureController';

const routers = Router();

routers.use('/users', userRouter);
routers.use('/medicalProcedures', medicalHistoryRouter)

export default routers;