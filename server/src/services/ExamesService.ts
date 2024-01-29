import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import mime from 'mime-types';
import { google } from 'googleapis';

import { Request, Response } from 'express';
import credentials from '../config/googleCredential.json';
import ExamesRequest from '../models/Request/ExamesRequest';

const scopes = ['https://www.googleapis.com/auth/drive'];

const auth = new google.auth.JWT(
  credentials.client_email,
  '',
  credentials.private_key,
  scopes
);

const drive = google.drive({ version: 'v3', auth });

const upload = async (req: Request, res: Response): Promise<any> => {
  const  { body, files } = req;  
  const { folder = null } = body;

      
  if (!folder) throw new Error('Folder not found');


  console.log(files);

  await Promise.all(
    // @ts-ignore
    files?.forEach(async (element: any) => {
      const resCreate = drive.files.create({
        requestBody: {
          name: element.originalname,
          parents: [folder],
        },
        media: {
          mimeType: element.mimeType,
          body: fs.createReadStream(path.resolve(element.path)),
        },
        fields: 'id',
      });

      if (fs.existsSync(path.resolve(element.path))) {
        fs.unlinkSync(path.resolve(element.path));
      }

      console.log(resCreate);
    })
  );

  return res;
  }

  const download = async (req: ExamesRequest, res: Response): Promise<any> => {
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

      console.log(resDrive.headers['content-type']);

      const dest = fs.createWriteStream(tempFile);
      resDrive.data.pipe(dest);

      dest.on('finish', () => {
        res.download(tempFile, name, (err) => {
          if (err) {
            console.log(err);
          }

          if (fs.existsSync(tempFile)) {
            fs.unlinkSync(tempFile);
          }
        });
      });
  }

  const list = async (folder: string): Promise<any> => {
    
      if (!folder) throw new Error('Folder not found');

      console.log('Authenticated as:', auth);

      const resFiles = await drive.files.list({
        q: `mimeType != 'application/vnd.google-apps.folder' and '${folder}' in parents`
      });

      console.log(resFiles)

      return resFiles.data.files;
  }

export default {
    upload,
    download, 
    list
};
