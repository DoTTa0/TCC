import { Request, Response, Router } from 'express';
import CheckinService from '../services/CheckinService';
import CheckinRequest from '../models/Request/CheckinRequest';
import CheckinResponse from '../models/Response/CheckinResponse';
import { generateCheckinPDF } from '../helpers/PDF';
import fs from 'fs';


const checkinRouter = Router();

interface TypedRequest<T> extends Request {
    // Adicione seus próprios campos específicos se necessário
    body: T;
  }

checkinRouter.post('/search', async (req: TypedRequest<CheckinRequest>, res: Response<CheckinResponse>): Promise<Response> => {
    const { body: model } = req; 
    const response = await CheckinService.checkinSearch(model);
    return res.status(200).json(response);
});

checkinRouter.put('/checkin', async (req: TypedRequest<CheckinRequest>, res: Response<CheckinResponse>): Promise<Response> => {
    const { body: model } = req; 
    const response = await CheckinService.checkin(model);
    const tempFile = generateCheckinPDF(response);
    res.download(tempFile, (err) => {
        if (err) {
          console.log(err);
        }

        if (fs.existsSync(tempFile)) {
          fs.unlinkSync(tempFile);
        }
      });
    
    return res.status(200).json(response);
});

//Plano B: Fazer rota de Download a parte;

export default checkinRouter;