import * as fs from 'fs';
import { join } from 'path';

export class FileManagerUtil {
  // ลบไฟล์ออกจากเครื่อง
  static deleteFile(filePath: string): void {
    try {
      // ตรวจสอบว่ามีไฟล์อยู่จริงไหมก่อนลบ
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (err) {
      console.error('Error deleting file:', err);
      // อาจจะ log ลง database หรือ ignore ไปก็ได้ตาม business logic
    }
  }

  // สร้าง Folder ถ้ายังไม่มี (เช่น uploads/2023/12)
  static ensureDirectoryExistence(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }
}
