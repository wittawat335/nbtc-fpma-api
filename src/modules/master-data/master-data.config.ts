import { FpmaMasterDepartment } from 'src/entities/FpmaMasterDepartment';
import { FpmaMasterDistrict } from 'src/entities/FpmaMasterDistrict';

export const MASTER_CONFIG = {
  district: {
    entity: FpmaMasterDistrict,
    value: 'code',
    label: 'nameTh',
    orderBy: 'nameTh',
  },
  department: {
    entity: FpmaMasterDepartment,
    value: 'itemId',
    label: 'name',
    orderBy: 'itemOrder',
  },
};
