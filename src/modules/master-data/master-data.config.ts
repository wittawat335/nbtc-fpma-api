import {
  FpmaMasterDepartment,
  FpmaMasterDistrict,
  FpmaMasterProvinces,
  FpmaMasterSubDistrict,
  FpmaMasterTitle,
} from 'src/entities';

export const MASTER_CONFIG = {
  province: {
    entity: FpmaMasterProvinces,
    value: 'code',
    label: 'nameTh',
    orderBy: 'itemOrder',
    extraSelect: ['itemId'],
  },
  district: {
    entity: FpmaMasterDistrict,
    value: 'code',
    label: 'nameTh',
    orderBy: 'nameTh',
    parentField: 'provinceId',
    extraSelect: ['provinceId'],
  },
  subDistrict: {
    entity: FpmaMasterSubDistrict,
    value: 'code',
    label: 'nameTh',
    orderBy: 'itemOrder',
    parentField: 'districtsId',
    extraSelect: ['districtsId'],
  },
  department: {
    entity: FpmaMasterDepartment,
    value: 'itemId',
    label: 'name',
    orderBy: 'itemOrder',
  },
  prefix: {
    entity: FpmaMasterTitle,
    value: 'itemId',
    label: 'name',
    orderBy: 'sortIndex',
  },
};
