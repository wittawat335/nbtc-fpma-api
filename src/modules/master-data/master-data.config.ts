import { FpmaMasterDepartment } from 'src/entities/FpmaMasterDepartment';
import { FpmaMasterDistrict } from 'src/entities/FpmaMasterDistrict';

export const MASTER_CONFIG = {
  // 'KEY' : ค่าที่จะให้ Frontend ส่งมา (เช่น /masters/district)
  district: {
    entity: FpmaMasterDistrict, // ชื่อ Class Entity
    value: 'code', // ชื่อ Column ที่เป็น ID (INT)
    label: 'nameTh', // ชื่อ Column ที่จะโชว์เป็นชื่อ (Text)
    orderBy: 'nameTh', // จะให้เรียงตามอะไร
  },
  department: {
    entity: FpmaMasterDepartment,
    value: 'itemId',
    label: 'name', // เช็คใน Entity ดีๆ ว่าชื่อ field คือ name หรือ description
    orderBy: 'itemOrder',
  },
  // อยากเพิ่ม Table ไหนอีก ก็เพิ่มต่อตรงนี้ได้เลยครับ...
};
