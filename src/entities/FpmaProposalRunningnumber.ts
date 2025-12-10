import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Proposal_Runningnumber", ["itemId"], { unique: true })
@Entity("FPMA_Proposal_Runningnumber", { schema: "dbo" })
export class FpmaProposalRunningnumber {
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

  @Column("nvarchar", { name: "dev", nullable: true, length: 250 })
  dev: string | null;

  @Column("int", { name: "proposal_id", default: () => "(0)" })
  proposalId: number;

  @Column("nvarchar", {
    name: "business_code",
    length: 10,
    default: () => "N''",
  })
  businessCode: string;

  @Column("nvarchar", {
    name: "section_number",
    length: 10,
    default: () => "N''",
  })
  sectionNumber: string;

  @Column("nvarchar", {
    name: "running_number",
    length: 20,
    default: () => "N''",
  })
  runningNumber: string;

  @Column("nvarchar", {
    name: "annoucement_number",
    length: 20,
    default: () => "N''",
  })
  annoucementNumber: string;

  @Column("nvarchar", { name: "number", length: 20, default: () => "N''" })
  number: string;
}
