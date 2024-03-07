import { NextFunction, Request, Response, Router } from 'express';
import MedicalProcedureRepository from '../repos/MedicalProcedureRepository';
import MedicalProcedureRequest from '../models/Request/MedicalProcedureRequest';
import { generatePDF, generatePrescriptionTemplate } from '../helpers/PDF';



const medicalHistoryRouter = Router();

// Extendendo a interface padrão do Express para adicionar sua própria tipagem
interface TypedRequest<T> extends Request {
    // Adicione seus próprios campos específicos se necessário
    body: T;
  }

medicalHistoryRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const medicalProcedures = await MedicalProcedureRepository.listAll();
    return res.status(200).json(medicalProcedures);
});

medicalHistoryRouter.get('/listByDoctor/:doctorId', async (req: Request, res: Response): Promise<Response> => {
    const { doctorId } = req.params;
    const medicalProcedures = await MedicalProcedureRepository.listByDoctorId(parseInt(doctorId));
    return res.status(200).json(medicalProcedures);
});

medicalHistoryRouter.get('/listByNurse/:nurseId', async (req: Request, res: Response): Promise<Response> => {
    const { nurseId } = req.params;
    const medicalProcedures = await MedicalProcedureRepository.listByNurseId(parseInt(nurseId));
    return res.status(200).json(medicalProcedures);
});

medicalHistoryRouter.get('/listByPatient/:patientId', async (req: Request, res: Response): Promise<Response> => {
    const { patientId } = req.params;
    const medicalProcedures = await MedicalProcedureRepository.listByPatientId(parseInt(patientId));
    return res.status(200).json(medicalProcedures);
});

medicalHistoryRouter.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const medicalProcedure = await MedicalProcedureRepository.getById(parseInt(id));
    return res.status(200).json(medicalProcedure);
});

medicalHistoryRouter.put('/:id', async (req: TypedRequest<MedicalProcedureRequest>, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { body: model } = req;
    const medicalProcedure = await MedicalProcedureRepository.edit(parseInt(id), model);
    return res.status(200).json(medicalProcedure);
});

medicalHistoryRouter.get('/download/:id', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const {id} = req.params;
        const medicalProcedure = await MedicalProcedureRepository.getById(Number(id));
        if (!medicalProcedure) throw Error('Proedimento não encotrado.');

        const html =  generatePrescriptionTemplate(medicalProcedure);

        const pdf = await generatePDF(html);
        // Enviando o PDF como resposta
        res.set({
            'Content-Type': 'application/pdf',
            // 'Content-Length': pdfBuffer.length,
            'Content-Disposition': 'inline; filename="prescription.pdf"'
        });
        res.send(pdf.buffer);
        // Fechando o navegador
        await pdf.browser.close();
  
     } catch (e) {
       next(e);
     }
  });

export default medicalHistoryRouter;