import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Annoucement", ["itemId"], { unique: true })
@Entity("FPMA_Annoucement", { schema: "dbo" })
export class FpmaAnnoucement {
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

  @Column("nvarchar", { name: "status", nullable: true, length: 20 })
  status: string | null;

  @Column("nvarchar", { name: "type", nullable: true, length: 20 })
  type: string | null;

  @Column("int", { name: "year", nullable: true })
  year: number | null;

  @Column("int", { name: "index", nullable: true })
  index: number | null;

  @Column("nvarchar", { name: "number", nullable: true, length: 20 })
  number: string | null;

  @Column("nvarchar", { name: "name", nullable: true, length: 250 })
  name: string | null;

  @Column("datetime2", { name: "start_date", nullable: true })
  startDate: Date | null;

  @Column("datetime2", { name: "end_date", nullable: true })
  endDate: Date | null;

  @Column("decimal", {
    name: "budget",
    nullable: true,
    precision: 19,
    scale: 4,
  })
  budget: number | null;

  @Column("nvarchar", { name: "description", nullable: true })
  description: string | null;

  @Column("nvarchar", { name: "external_link", nullable: true, length: 250 })
  externalLink: string | null;

  @Column("bit", { name: "is_display", nullable: true })
  isDisplay: boolean | null;
}
