import { ValueTransformer } from 'typeorm';

export const jsonTransformer: ValueTransformer = {
  // to: แปลงจาก Object ใน Code ไปเป็น String ลง Database
  to: (value: any) => {
    if (value === null || value === undefined) return null;

    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value);
    }
    return value;
  },
  // from: ดึงจาก Database (String) กลับมาเป็น Object ให้ใช้งาน
  from: (value: any) => {
    if (value === null || value === undefined) return null;

    if (typeof value === 'string' && value.trim() !== '') {
      try {
        return JSON.parse(value);
      } catch (error) {
        return value;
      }
    }
    return value;
  },
};
