import htmlPdf from 'html-pdf';
import path from 'path';
import CheckinResponse from '../../models/Response/CheckinResponse';


const generateCheckinPDF = (model: CheckinResponse): string => {
  const { patient, medicalProcedure } = model;
  const { medicalProcedureType } = medicalProcedure;
  const { medicalProcedureSection } = medicalProcedureType;
  const htmlTemplate = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        .circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: ${medicalProcedureSection.color};
        }
      </style>
    </head>
    <body>
      <div>
        <div>Paciente: ${patient.name}</div>
        <div>Nome da mãe: ${patient.nameMother}</div>
        <div>Data de nascimento: ${new Date(patient.birthDate).toLocaleDateString('pt-BR')}</div>
        <div>Data: ${new Date(medicalProcedure.procedureDate).toLocaleDateString('pt-BR')}</div>
        <div>
          <div class="circle"></div>
        </div>
      </div>
    </body>
  </html>
`;

const options = {
  height: '11.25in',
  width: '8.5in',
  header: {
    height: '1in',
  },
  footer: {
    height: '1in',
  },
};

const tempFile = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'uploads',
  'temp',
  `patient.pdf`
);

htmlPdf.create(htmlTemplate, options).toFile(tempFile, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('PDF gerado com sucesso');
  }
});


return tempFile;

}

export {
    generateCheckinPDF
}