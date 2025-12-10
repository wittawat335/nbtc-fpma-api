import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Proposal_Resolution", ["itemId"], { unique: true })
@Entity("FPMA_Proposal_Resolution", { schema: "dbo" })
export class FpmaProposalResolution {
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

  @Column("int", { name: "proposal_id", nullable: true })
  proposalId: number | null;

  @Column("nvarchar", { name: "type", nullable: true, length: 20 })
  type: string | null;

  @Column("int", { name: "index", nullable: true })
  index: number | null;

  @Column("date", { name: "meettingdate", nullable: true })
  meettingdate: Date | null;

  @Column("nvarchar", { name: "comment", nullable: true })
  comment: string | null;

  @Column("nvarchar", { name: "resolution", nullable: true })
  resolution: string | null;
}
