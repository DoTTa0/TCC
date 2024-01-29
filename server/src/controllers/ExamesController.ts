import { NextFunction, Request, Response, Router } from 'express';
import ExamesService from '../services/ExamesService';
import { upload } from '../helpers/Multer';
import ExamesRequest from '../models/Request/ExamesRequest';

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

examesRouter.post('/download', async (req: TypedRequest<ExamesRequest>, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { body:model } = req; 
        await ExamesService.download(model, res);
        return res.status(200).end();
    } catch (e) {
        next(e);
    }
});

examesRouter.get('/list/:folder', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { folder } = req.params;
        console.log(folder)
        const response = await ExamesService.list(folder);
        return res.status(200).json(response);
    } catch (e) {
        next(e);
    }

});

export default examesRouter;