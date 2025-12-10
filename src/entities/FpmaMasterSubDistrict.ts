import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Master_SubDistrict", ["itemId"], { unique: true })
@Entity("FPMA_Master_SubDistrict", { schema: "dbo" })
export class FpmaMasterSubDistrict {
  @PrimaryGeneratedColumn({ type: "int", name: "ItemID" })
  itemId: number;

  @Column("int", { name: "ItemCreatedBy", nullable: true })
  itemCreatedBy: number | null;

  @Column("datetime2", { name: "ItemCreatedWhen", nullable: true })
  itemCreatedWhen: Date | null;

  @Column("int", { name: "ItemModifiedBy", nullable: true })
  itemModifiedBy: number | null;

  @Column("datetime2", { name: "ItemModifiedWhen", nullable: true })
  itemModifiedWhen: Date | null;

  @Column("int", { name: "ItemOrder", nullable: true })
  itemOrder: number | null;

  @Column("uniqueidentifier", {
    name: "ItemGUID",
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  itemGuid: string;

  @Column("int", { name: "code", nullable: true })
  code: number | null;

  @Column("nvarchar", { name: "name_th", nullable: true, length: 200 })
  nameTh: string | null;

  @Column("nvarchar", { name: "name_en", nullable: true, length: 200 })
  nameEn: string | null;

  @Column("int", { name: "districts_id", nullable: true })
  districtsId: number | null;

  @Column("nvarchar", { name: "zip_code", nullable: true, length: 20 })
  zipCode: string | null;
}
