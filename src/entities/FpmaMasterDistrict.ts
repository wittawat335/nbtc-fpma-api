import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Master_District", ["itemId"], { unique: true })
@Entity("FPMA_Master_District", { schema: "dbo" })
export class FpmaMasterDistrict {
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

  @Column("nvarchar", { name: "code", nullable: true, length: 20 })
  code: string | null;

  @Column("nvarchar", { name: "name_th", nullable: true, length: 200 })
  nameTh: string | null;

  @Column("nvarchar", { name: "name_en", nullable: true, length: 200 })
  nameEn: string | null;

  @Column("int", { name: "province_id", nullable: true })
  provinceId: number | null;
}
