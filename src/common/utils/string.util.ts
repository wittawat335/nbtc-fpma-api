import { v4 as uuidv4 } from 'uuid'; // npm i uuid

export class StringUtil {
  // สร้าง UUID v4
  static uuid(): string {
    return uuidv4();
  }

  // สุ่มตัวอักษรผสมตัวเลข ตามความยาวที่กำหนด (เช่น เอาไปทำ OTP หรือ Ref)
  static randomString(length: number = 10): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // แปลง Text เป็น Slug (เช่น "Hello World" -> "hello-world")
  static slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
  }
}
