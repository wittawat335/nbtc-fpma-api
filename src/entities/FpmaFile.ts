import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FpmaProposalFile } from './FpmaProposalFile';

@Index('PK_FPMA_File', ['itemId'], { unique: true })
@Entity('FPMA_File', { schema: 'dbo' })
export class FpmaFile {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ItemID' })
  itemId: number;

  @Column('int', { name: 'ItemCreatedBy', nullable: true })
  itemCreatedBy: number | null;

  @Column('datetime2', { name: 'ItemCreatedWhen', nullable: true })
  itemCreatedWhen: Date | null;

  @Column('int', { name: 'ItemModifiedBy', nullable: true })
  itemModifiedBy: number | null;

  @Column('datetime2', { name: 'ItemModifiedWhen', nullable: true })
  itemModifiedWhen: Date | null;

  @Column('int', { name: 'ItemOrder', nullable: true })
  itemOrder: number | null;

  @Column('uniqueidentifier', {
    name: 'ItemGUID',
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  itemGuid: string;

  // เปลี่ยนจาก length: 20 เป็น "MAX" เพื่อรองรับข้อความยาว
  @Column('nvarchar', { name: 'type', nullable: true, length: 'MAX' })
  type: string | null;

  @Column('nvarchar', { name: 'path', nullable: true, length: 200 })
  path: string | null;

  @Column('nvarchar', { name: 'name', nullable: true, length: 200 })
  name: string | null;

  @Column('nvarchar', { name: 'extension', nullable: true, length: 20 })
  extension: string | null;

  @Column('nvarchar', { name: 'size', nullable: true, length: 20 })
  size: string | null;

  @Column('nvarchar', { name: 'hash', nullable: true, length: 200 })
  hash: string | null;

  @OneToMany(() => FpmaProposalFile, (proposalFile) => proposalFile.file)
  proposalFiles: FpmaProposalFile[];
}
