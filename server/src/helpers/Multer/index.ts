import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const storage = multer.diskStorage({
  filename: async (req, file, cb) => {
    try {
      const hash = crypto.randomBytes(16);
      const fileName = `${hash.toString('hex')}-${file.originalname}`;
      cb(null, fileName);
    } catch (error: any) {
      cb(error, '');
    }
  },
  destination: path.resolve(
    __dirname,
    '..',
    '..',
    '..',
    'uploads',
    'temp'
  )
});

const fileFilter = (req: any, file: any, cb: any) => {
  cb(null, true);
};

const limits = {
  fileSize: 5 * 1024 * 1024,
};

const upload = multer({
  storage,
  fileFilter,
  limits 
});

export { upload };
