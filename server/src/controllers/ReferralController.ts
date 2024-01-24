import { Request, Response, Router } from 'express';
import ReferralService from '../services/ReferralService';
import ReferralRequest from '../models/Request/ReferralRequest';
import ReferralCheckinResponse from '../models/Response/ReferralCheckinResponse';

interface TypedRequest<T> extends Request {
    // Adicione seus próprios campos específicos se necessário
    body: T;
  }

const referralRouter = Router();

referralRouter.post('/search', async (req: TypedRequest<ReferralRequest>, res: Response): Promise<Response> => {
    const { body: model } = req; 
    const response = await ReferralService.referralSearch(model);
    return res.status(200).json(response);
});

referralRouter.post('/referralByCheckin', async (req: TypedRequest<ReferralRequest>, res: Response<ReferralCheckinResponse[]>): Promise<Response> => {
    const { body: model } = req; 
    const response = await ReferralService.referralSearchToJob(model);
    return res.status(200).json(response);
});


export default referralRouter;