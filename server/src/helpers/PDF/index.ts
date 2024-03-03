import htmlPdf from 'html-pdf';
import path from 'path';
import CheckinResponse from '../../models/Response/CheckinResponse';
import MedicalProcedure from '../../entities/MedicalProcedure';
import fs from 'fs';


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

const generatePrescriptionPDF = (model: MedicalProcedure): string => {
  const { patient, doctor, prescriptions } = model;
  const today = new Date();

  const img = path.resolve(
    __dirname,
    '..',
    '..',
    'config',
    'LogoTCC.png'
  );

  const prescr = prescriptions.map((item, index) => {
    return (
      `
      ${index + 1})<br>
      <span><strong>Medicamento:</strong> ${item.medicament}</span><br>
      <span><strong>Dosagem:</strong> ${item.dosage}</span><br>
      <span><strong>Indica&ccedil;&otilde;es:</strong> ${item.instructions}</span><br><br>`
    )
  }).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    '',
  )


  const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Receituário Médico</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                text-align: center;
                margin-bottom: 20px;
            }
            .patient-info {
                margin-bottom: 20px;
            }
            .prescription {
                margin-bottom: 20px;
            }
            .doctor-info {
                text-align: right;
            }
            .logo {
                position: absolute;
                top: 20px;
                right: 20px;
                width: 100px; /* Ajuste o tamanho conforme necessário */
                height: 100px;
            }
        </style>
    </head>
    <body>
    <img class="logo" src="data:image/jpeg;base64,${getImageBase64(img)}" alt="Logo do Consult&oacute;rio" />
    <div class="contsainer">
    <div class="header">
    <h1>Receitu&aacute;rio M&eacute;dico</h1>
    </div>
    <div class="patient-info">
    <p><strong>Paciente:</strong> ${patient.name}</p>
    <p><strong>G&ecirc;nero:</strong> ${patient.gender}</p>
    <p><strong>Data:</strong> ${today.getDate()}/${today.getMonth()}/${today.getFullYear()}</p>
    </div>
    <div class="prescription">
    <h2>Prescri&ccedil;&atilde;o</h2>
    ${prescr}
    </div>
    <div class="doctor-info">
    <p><strong>M&eacute;dico:</strong> ${doctor.name}</p>
    <p><strong>CRM:</strong> ${doctor.crm}</p>
    <p><strong>Assinatura:</strong> __________________________</p>
    </div>
    </div>
    </body>
  </html>
`;


return htmlTemplate;

}


const getImageBase64 = (path:string) => {
  const imagePath = path;
  const imageBuffer = fs.readFileSync(imagePath);
  return Buffer.from(imageBuffer).toString('base64');
}

export {
    generateCheckinPDF,
    generatePrescriptionPDF
}