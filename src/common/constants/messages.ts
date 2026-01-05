export const RESPONSE_MESSAGES = {
  USER: {
    CREATE_SUCCESS: 'ลงทะเบียนผู้ใช้งานสำเร็จ',
    UPDATE_SUCCESS: 'แก้ไขข้อมูลเรียบร้อยแล้ว',
    DELETE_SUCCESS: 'ลบผู้ใช้งานสำเร็จ',
    NOT_FOUND: 'ไม่พบข้อมูลผู้ใช้งานในระบบ',
    EMAIL_EXIST: 'อีเมลนี้ถูกใช้งานแล้ว กรุณาใช้อีเมลอื่น',
  },

  AUTH: {
    LOGIN_SUCCESS: 'เข้าสู่ระบบสำเร็จ',
    LOGIN_FAIL: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง',
    UNAUTHORIZED: 'คุณไม่มีสิทธิ์เข้าถึงส่วนนี้',
  },

  COMMON: {
    SERVER_ERROR: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์ กรุณาลองใหม่ภายหลัง',
    INVALID_ID: 'รูปแบบ ID ไม่ถูกต้อง',
  },
};
