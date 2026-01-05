import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class IdentityDocumentDto {
  @IsString() @IsOptional() type?: string;
  @IsString() @IsOptional() no?: string;
  @IsString() @IsOptional() issuedBy?: string;
  @IsString() @IsOptional() issuedProvince?: string;
}

export class AddressDto {
  @IsString() @IsOptional() province?: string;
  @IsString() @IsOptional() no?: string;
  @IsString() @IsOptional() moo?: string;
  @IsString() @IsOptional() village?: string;
  @IsString() @IsOptional() soi?: string;
  @IsString() @IsOptional() road?: string;
  @IsString() @IsOptional() district?: string;
  @IsString() @IsOptional() subDistrict?: string;
  @IsString() @IsOptional() postalCode?: string;
}

export class LocationAddressDto extends AddressDto {
  @IsString() @IsOptional() tel?: string;
  @IsString() @IsOptional() fax?: string;
  @IsString() @IsOptional() email?: string;
  @IsString() @IsOptional() webSite?: string;
}

export class ContactAddressDto extends LocationAddressDto {
  @IsBoolean() @IsOptional() isCheck?: boolean;
}

export class PersonDto {
  @IsString() @IsOptional() prefix?: string;
  @IsString() @IsOptional() firstname?: string;
  @IsString() @IsOptional() lastname?: string;
  @IsString() @IsOptional() position?: string;
  @IsString() @IsOptional() tel?: string;
  @IsString() @IsOptional() fax?: string;
  @IsString() @IsOptional() email?: string;
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  age?: number;
  @IsString() @IsOptional() nationality?: string;

  @ValidateNested()
  @Type(() => IdentityDocumentDto)
  identityDocument?: IdentityDocumentDto;

  @ValidateNested()
  @Type(() => AddressDto)
  address?: AddressDto;
}

export class MandatePersonDto extends PersonDto {
  @IsBoolean() @IsOptional() isCheck?: boolean;
}

export class ContactPersonDto {
  @IsString() @IsOptional() prefix?: string;
  @IsString() @IsOptional() firstname?: string;
  @IsString() @IsOptional() lastname?: string;
  @IsString() @IsOptional() position?: string;
  @IsString() @IsOptional() tel?: string;
  @IsString() @IsOptional() email?: string;

  @IsString() @IsOptional() fax?: string;
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) =>
    value === '' || value === null ? null : Number(value),
  )
  age?: number;

  @IsString() @IsOptional() nationality?: string;
}
