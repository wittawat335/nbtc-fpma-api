import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Change_Log", ["itemId"], { unique: true })
@Entity("FPMA_Change_Log", { schema: "dbo" })
export class FpmaChangeLog {
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

  @Column("nvarchar", { name: "dev", nullable: true, length: 200 })
  dev: string | null;

  @Column("nvarchar", { name: "table_name", nullable: true, length: 250 })
  tableName: string | null;

  @Column("nvarchar", { name: "data_item_id", nullable: true, length: 100 })
  dataItemId: string | null;

  @Column("nvarchar", { name: "data_before_change", nullable: true })
  dataBeforeChange: string | null;
}
