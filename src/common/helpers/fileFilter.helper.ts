import { Request } from 'express';

export const fileFilter = (req: Request, file: Express.Multer.File, cb) => {
  if (!file) return cb(new Error('No file provided'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  if (!allowedExtensions.includes(fileExtension)) return cb(null, false);

  cb(null, true);
};
