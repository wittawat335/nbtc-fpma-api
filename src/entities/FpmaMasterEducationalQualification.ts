import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Master_Educational_Qualification", ["itemId"], { unique: true })
@Entity("FPMA_Master_Educational_Qualification", { schema: "dbo" })
export class FpmaMasterEducationalQualification {
  @PrimaryGeneratedColumn({ type: "int", name: "ItemID" })
  itemId: number;

  @Column("nvarchar", { name: "number", nullable: true, length: 20 })
  number: string | null;

  @Column("nvarchar", { name: "code", nullable: true, length: 10 })
  code: string | null;

  @Column("nvarchar", { name: "name", length: 250, default: () => "N''" })
  name: string;

  @Column("nvarchar", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "order_index", nullable: true })
  orderIndex: number | null;

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
}
