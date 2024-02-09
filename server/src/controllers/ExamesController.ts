import { NextFunction, Request, Response, Router } from 'express';
import ExamesService from '../services/ExamesService';
import { upload } from '../helpers/Multer';
import ExamesRequest from '../models/Request/ExamesRequest';
import fs from 'fs';

const examesRouter = Router();

interface TypedRequest<T> extends Request {
    // Adicione seus próprios campos específicos se necessário
    body: T;
}

examesRouter.post('/upload', upload.array('files'), async (req: Request, res: Response, next: NextFunction): Promise<any> => {
   try {
        await ExamesService.upload(req, res);
        return res.status(200).end();
    } catch (e) {
        next(e);
    }
});

examesRouter.get('/download/:fileId/:fileName', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { params } = req;
        const model = new ExamesRequest();
        model.file = params.fileId;
        model.name = params.fileName; 
        const response = await ExamesService.download(model);
        const dest = fs.createWriteStream(response.tempFile);
        response.fileData.pipe(dest);
        dest.on('finish', () => {
          res.download(response.tempFile, model.name, (err) => {
            if (err) {
              console.log(err);
            }
  
            if (fs.existsSync(response.tempFile)) {
              fs.unlinkSync(response.tempFile);
            }
          });
        });
    } catch (e) {
        next(e);
    }
});

examesRouter.get('/list/:folder', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { folder } = req.params;
        const response = await ExamesService.list(folder);
        
        return res.status(200).json(response);
    } catch (e) {
        next(e);
    }

});

export default examesRouter;