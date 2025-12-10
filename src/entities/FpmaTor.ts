import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Tor", ["itemId"], { unique: true })
@Entity("FPMA_Tor", { schema: "dbo" })
export class FpmaTor {
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

  @Column("int", { name: "annoucement_id", nullable: true })
  annoucementId: number | null;

  @Column("nvarchar", { name: "business_type", nullable: true, length: 20 })
  businessType: string | null;

  @Column("int", { name: "sectiion_id", nullable: true })
  sectiionId: number | null;

  @Column("nvarchar", { name: "section_number", nullable: true, length: 20 })
  sectionNumber: string | null;

  @Column("nvarchar", { name: "section_name", nullable: true, length: 200 })
  sectionName: string | null;

  @Column("nvarchar", { name: "number", nullable: true, length: 20 })
  number: string | null;

  @Column("nvarchar", { name: "name", nullable: true, length: 4000 })
  name: string | null;

  @Column("int", { name: "request_form_id", nullable: true })
  requestFormId: number | null;

  @Column("nvarchar", { name: "dev", nullable: true, length: 200 })
  dev: string | null;
}
