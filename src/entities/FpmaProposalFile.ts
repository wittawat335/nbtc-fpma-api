import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Proposal_File", ["itemId"], { unique: true })
@Entity("FPMA_Proposal_File", { schema: "dbo" })
export class FpmaProposalFile {
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

  @Column("int", { name: "proposal_id", nullable: true })
  proposalId: number | null;

  @Column("int", { name: "file_id", nullable: true })
  fileId: number | null;
}
