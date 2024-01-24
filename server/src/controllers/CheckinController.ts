import { Request, Response, Router } from 'express';
import CheckinService from '../services/CheckinService';
import CheckinRequest from '../models/Request/CheckinRequest';
import CheckinResponse from '../models/Response/CheckinResponse';

const checkinRouter = Router();

interface TypedRequest<T> extends Request {
    // Adicione seus próprios campos específicos se necessário
    body: T;
  }

checkinRouter.get('/search', async (req: TypedRequest<CheckinRequest>, res: Response<CheckinResponse>): Promise<Response> => {
    const { body: model } = req; 
    const response = await CheckinService.checkinSearch(model);
    return res.status(200).json(response);
});

checkinRouter.put('/checkin', async (req: TypedRequest<CheckinRequest>, res: Response<CheckinResponse>): Promise<Response> => {
    const { body: model } = req; 
    const response = await CheckinService.checkin(model);
    return res.status(200).json(response);
});

export default checkinRouter;