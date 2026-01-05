import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  ContactAddressDto,
  ContactPersonDto,
  LocationAddressDto,
  MandatePersonDto,
  PersonDto,
} from './create-proposal-shared.dto';

export class CreateProposalDto {
  // 1.1 ชื่อหน่วยงาน
  @IsString() @IsOptional() organizationName?: string;
  @IsString() @IsOptional() departmentName?: string;

  // 1.2 ชื่อโครงการ
  @IsString() @IsOptional() name?: string; // mapping to proposal.Name

  @IsString()
  @IsOptional()
  nameEn?: string;

  // 1.3 งบประมาณ
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  budget?: number;

  // 1.4 ระยะเวลา
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  duration?: number;

  // 1.5 สถานภาพ
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  organizationTypeId?: number;

  // 1.6 หัวหน้าโครงการ (Nested Object)
  @ValidateNested()
  @Type(() => PersonDto)
  resposiiblePerson?: PersonDto;

  // 1.7 ผู้มีอำนาจกระทำการ (Nested Object)
  @ValidateNested()
  @Type(() => PersonDto)
  authorityPerson?: PersonDto;

  // 1.8 ผู้รับมอบอำนาจ (Nested Object)
  @ValidateNested()
  @Type(() => MandatePersonDto)
  attorneyPerson?: MandatePersonDto;

  // 1.9 ผู้ประสานงาน (Nested Object)
  @ValidateNested()
  @Type(() => ContactPersonDto)
  contactPerson?: ContactPersonDto;

  // 1.10 สถานที่ตั้งโครงการ (Nested Object)
  @ValidateNested()
  @Type(() => LocationAddressDto)
  projectAddress?: LocationAddressDto;

  // 1.11 สถานที่ติดต่อ (Nested Object)
  @ValidateNested()
  @Type(() => ContactAddressDto)
  contactAddress?: ContactAddressDto;

  // 1.12 ข้อมูลภาษี
  @IsString() @IsOptional() taxId?: string;
  @IsString() @IsOptional() taxBranchCode?: string;
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  organizationStatusId?: number;
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  vat?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  withholdingTax?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  taxExemption?: number;

  @IsNumber() @IsOptional() itemCreatedBy?: number;
  @IsNumber() @IsOptional() itemModifiedBy?: number;

  @IsOptional()
  budgetDetails?: any;

  @IsOptional()
  budget_01?: any;

  @IsOptional()
  budget_02?: any;

  @IsOptional()
  budget_03?: any;

  @IsOptional()
  budget_04?: any;

  @IsOptional()
  budget_05?: any;

  @IsOptional()
  budget_06?: any;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  budgetSubTotal?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  budgetVat?: number;

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  budgetTotal?: number;

  @IsString() @IsOptional() type?: string; // ประเภทโครงการ
  @IsString() @IsOptional() previousProposal?: string; // ความเป็นมา
  @IsString() @IsOptional() relationWithOther?: string; // ความสอดคล้อง
  @IsString() @IsOptional() beneficiary?: string; // ผู้ได้รับประโยชน์
  @IsString() @IsOptional() govermentPolicy?: string; // นโยบายรัฐ
  @IsString() @IsOptional() principlesOf?: string; // หลักการและเหตุผล
  @IsString() @IsOptional() objective?: string; // วัตถุประสงค์
  @IsString() @IsOptional() scopeOfWork?: string; // ขอบเขตการดำเนินงาน
  @IsString() @IsOptional() expectResult?: string; // ผลที่คาดว่าจะได้รับ
  @IsString() @IsOptional() kpiOfSuccess?: string; // ตัวชี้วัดความสำเร็จ
  @IsString() @IsOptional() otherKpiOfSuccess?: string;
  @IsString() @IsOptional() theory?: string; // ทฤษฎี
  @IsString() @IsOptional() technicalConcept?: string; // แนวคิดทางเทคนิค
  @IsString() @IsOptional() stepOfWork?: string; // ขั้นตอนการดำเนินงาน
  @IsString() @IsOptional() risk?: string; // ความเสี่ยง
  @IsString() @IsOptional() placeOfWork?: string; // สถานที่ดำเนินงาน
  @IsString() @IsOptional() teams?: string; // ทีมงาน (ใน Entity เป็น string)
  @IsString() @IsOptional() otherBudget?: string; // งบประมาณอื่นๆ
  @IsString() @IsOptional() reference?: string; // เอกสารอ้างอิง
  @IsString() @IsOptional() sustain?: string; // ความยั่งยืน
  @IsString() @IsOptional() swotAnalysis?: string; // SWOT
  @IsString() @IsOptional() otherNote?: string; // หมายเหตุอื่นๆ

  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  proposalStatusId?: number;

  // @IsOptional()
  // @IsArray()
  // teams?: any[];

  // @IsOptional()
  // @IsArray()
  // locations?: any[];
}
