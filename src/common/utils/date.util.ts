export class DateUtil {
  // ได้วันที่ปัจจุบันในรูปแบบ ISO (2023-12-10T10:00:00.000Z)
  static nowISO(): string {
    return new Date().toISOString();
  }

  // เพิ่มเวลา (เช่น Token หมดอายุอีก 15 นาที)
  static addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes * 60000);
  }

  // เช็คว่าเป็นวันที่ในอดีตหรือไม่
  static isPast(date: Date): boolean {
    return new Date() > date;
  }

  // แปลง timestamp เป็น Date object ป้องกัน error
  static toDate(value: string | number | Date): Date {
    return new Date(value);
  }
}
