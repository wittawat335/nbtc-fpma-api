import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

export class FileUploadUtil {
  // 1. Custom Name: เปลี่ยนชื่อไฟล์เป็น UUID เพื่อไม่ให้ซ้ำกัน
  static customFileName(req, file, callback) {
    const uniqueSuffix = uuidv4();
    const fileExt = extname(file.originalname);
    // ผลลัพธ์: "uuid-v4-xxxx.png"
    callback(null, `${uniqueSuffix}${fileExt}`);
  }

  // 2. Image Filter: อนุญาตเฉพาะไฟล์รูปภาพ
  static imageFileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
      return callback(
        new HttpException(
          'Only image files are allowed!',
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
    callback(null, true);
  }

  // 3. PDF Filter: อนุญาตเฉพาะ PDF
  static pdfFileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(pdf)$/)) {
      return callback(
        new HttpException(
          'Only PDF files are allowed!',
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
    callback(null, true);
  }
}
