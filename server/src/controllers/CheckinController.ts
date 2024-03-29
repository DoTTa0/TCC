import { NextFunction, Request, Response, Router } from 'express';
import CheckinService from '../services/CheckinService';
import CheckinRequest from '../models/Request/CheckinRequest';
import CheckinResponse from '../models/Response/CheckinResponse';
import { generateCheckinTemplate, generatePDF } from '../helpers/PDF';
import fs from 'fs';
import path from 'path';


const checkinRouter = Router();

interface TypedRequest<T> extends Request {
    // Adicione seus próprios campos específicos se necessário
    body: T;
  }

checkinRouter.post('/search', async (req: TypedRequest<CheckinRequest>, res: Response<CheckinResponse>, next: NextFunction): Promise<Response | undefined> => {
    try {
      const { body: model } = req; 
      const response = await CheckinService.checkinSearch(model);
      return res.status(200).json(response);
    } catch (e) {
      next(e);
    }
});

checkinRouter.put('/checkin', async (req: TypedRequest<CheckinRequest>, res: Response<any>, next: NextFunction): Promise<any> => {
   try {
      const { body: model } = req; 
      const response = await CheckinService.checkin(model);
      const html = generateCheckinTemplate(response);
    
      const pdf = await generatePDF(html);
      // Enviando o PDF como resposta
      res.set({
          'Content-Type': 'application/pdf',
          // 'Content-Length': pdfBuffer.length,
          'Content-Disposition': 'attachment; filename="patient.pdf"'
      });
      res.send(pdf.buffer);
      // Fechando o navegador
      await pdf.browser.close();

      
      //return res.status(200).json(response);
    } catch (e) {
      next(e);
    }
});

export default checkinRouter;