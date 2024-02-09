import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import mime from 'mime-types';
import { google } from 'googleapis';
import { Request, Response } from 'express';
import ExamesRequest from '../models/Request/ExamesRequest';
import ExamesDownloadResponse from '../models/Response/ExamesDownloadResponse';

const scopes = ['https://www.googleapis.com/auth/drive'];

const auth = new google.auth.GoogleAuth({
  keyFile: path.resolve(
    __dirname,
    '..',
    'config',
    'googleDriveCredentials.json'
  ),
  scopes
}
);

const drive = google.drive({ version: 'v3', auth });

const upload = async (req: Request, res: Response): Promise<any> => {
  const  { body, files } = req;  
  const { folder  } = body;

  if (!folder) throw new Error('Folder not found');


  await Promise.all(
    // @ts-ignore
    files?.forEach(async (element: any) => {
      const resCreate = await drive.files.create({
        requestBody: {
          name: element.originalname,
          parents:[folder]
        },
        media: {
          mimeType: element.mimeType,
          body: fs.createReadStream(path.resolve(element.path)),
        },
        fields: 'id',
      }).finally(() => {
          if (fs.existsSync(path.resolve(element.path))) {
            fs.unlinkSync(path.resolve(element.path));
          }
      });
      //console.log(resCreate);
    })
  );
  }

  const download = async (req: ExamesRequest): Promise<ExamesDownloadResponse> => {
      const { file = null, name = null } = req;

      if (!name || !file) throw new Error('Folder not found');


      const resDrive = await drive.files.get(
        {
          fileId: file,
          alt: 'media',
        },
        {
          responseType: 'stream',
        }
      );

      const hash = crypto.randomBytes(8);
      const date = Date.now();
      const ext = mime.extension(resDrive.headers['content-type']);
      const fileName = `${hash.toString('hex')}_${date}.${ext}`;
      const tempFile = path.resolve(
        __dirname,
        '..',
        '..',
        'uploads',
        'temp',
        `${fileName}`
      );

      const response = new ExamesDownloadResponse();
      response.tempFile = tempFile;
      response.fileData = resDrive.data;

      return response;

  }

  const list = async (folder: string): Promise<any> => {
    
      if (!folder) throw new Error('Folder not found');

      const resFiles = await drive.files.list({
        q: `mimeType != 'application/vnd.google-apps.folder' and '${folder}' in parents`
      });

      return resFiles.data.files;
  }

export default {
    upload,
    download, 
    list
};
