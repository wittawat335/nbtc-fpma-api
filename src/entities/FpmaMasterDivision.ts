import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Master_Division", ["itemId"], { unique: true })
@Entity("FPMA_Master_Division", { schema: "dbo" })
export class FpmaMasterDivision {
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

  @Column("nvarchar", { name: "dev", nullable: true, length: 500 })
  dev: string | null;

  @Column("nvarchar", { name: "number", nullable: true, length: 200 })
  number: string | null;

  @Column("nvarchar", { name: "name", length: 250, default: () => "N''" })
  name: string;

  @Column("nvarchar", { name: "description", nullable: true, length: 500 })
  description: string | null;
}
