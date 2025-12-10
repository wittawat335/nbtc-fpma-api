import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Proposal_Copy", ["itemId"], { unique: true })
@Entity("FPMA_Proposal_Copy", { schema: "dbo" })
export class FpmaProposalCopy {
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

  @Column("nvarchar", { name: "type", nullable: true, length: 200 })
  type: string | null;

  @Column("int", { name: "proposal_id", nullable: true })
  proposalId: number | null;

  @Column("nvarchar", { name: "node", nullable: true, length: 200 })
  node: string | null;

  @Column("decimal", { name: "score", nullable: true, precision: 20, scale: 2 })
  score: number | null;

  @Column("nvarchar", { name: "copy_detail", nullable: true, length: 200 })
  copyDetail: string | null;

  @Column("nvarchar", { name: "portal_doc_id", nullable: true, length: 200 })
  portalDocId: string | null;

  @Column("nvarchar", { name: "status", nullable: true, length: 200 })
  status: string | null;

  @Column("nvarchar", { name: "json_data", nullable: true })
  jsonData: string | null;

  @Column("nvarchar", { name: "match_overview", nullable: true, length: 200 })
  matchOverview: string | null;
}
