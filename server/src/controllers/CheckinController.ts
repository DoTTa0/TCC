import { NextFunction, Request, Response, Router } from 'express';
import CheckinService from '../services/CheckinService';
import CheckinRequest from '../models/Request/CheckinRequest';
import CheckinResponse from '../models/Response/CheckinResponse';
import { generateCheckinPDF } from '../helpers/PDF';
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
      generateCheckinPDF(response);
      // const promise = new Promise((resolve, reject) => {
      //   res.download(tempFile, (err) => {
      //     if (err) {
      //       console.log(err);
      //     }
      //     if (fs.existsSync(tempFile)) {
      //       fs.unlinkSync(tempFile);
      //     }
      //   });
      // })

      // await Promise.all([
      //   promise
      // ]).finally(() => {
      //   if (fs.existsSync(tempFile)) {
      //     fs.unlinkSync(tempFile);
      //   }
      // });

      
      return res.status(200).json(response);
    } catch (e) {
      next(e);
    }
});

checkinRouter.get('/download', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {

    const tempFile = path.resolve(
      __dirname,
      '..',
      '..',
      'uploads',
      'temp',
      `patient.pdf`
    );
    
     const promise = new Promise((resolve, reject) => {
       res.download(tempFile, (err) => {
         if (err) {
           console.log(err);
         }
         if (fs.existsSync(tempFile)) {
           fs.unlinkSync(tempFile);
         }
       });
     })

     await Promise.all([
       promise
     ]).finally(() => {
       if (fs.existsSync(tempFile)) {
         fs.unlinkSync(tempFile);
       }
     });

     
   } catch (e) {
     next(e);
   }
});

//Plano B: Fazer rota de Download a parte;

export default checkinRouter;