import { Request, Response, Router } from 'express';
import UserRepository from '../repos/UserRepository';
import UserRequest from '../models/Request/UserRequest';

const userRouter = Router();

// Extendendo a interface padrão do Express para adicionar sua própria tipagem
interface TypedRequest<T> extends Request {
    // Adicione seus próprios campos específicos se necessário
    body: T;
  }

userRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const users = await UserRepository.list();
    console.log(users)
    return res.status(200).json(users);
});

userRouter.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const user = await UserRepository.getById(parseInt(id));
    return res.status(200).json(user);
});

userRouter.put('/:id', async (req: TypedRequest<UserRequest>, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { body: model } = req;
    const user = await UserRepository.edit(parseInt(id), model);
    return res.status(200).json(user);
});

export default userRouter;