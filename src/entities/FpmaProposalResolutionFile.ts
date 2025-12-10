import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK__FPMA_Pro__727E83EB632E5825", ["itemId"], { unique: true })
@Entity("FPMA_Proposal_Resolution_file", { schema: "dbo" })
export class FpmaProposalResolutionFile {
  @PrimaryGeneratedColumn({ type: "int", name: "ItemID" })
  itemId: number;

  @Column("uniqueidentifier", {
    name: "ItemGUID",
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  itemGuid: string;

  @Column("int", { name: "ItemCreatedBy", nullable: true })
  itemCreatedBy: number | null;

  @Column("datetime2", { name: "ItemCreatedWhen", nullable: true })
  itemCreatedWhen: Date | null;

  @Column("int", { name: "ItemModifiedBy", nullable: true })
  itemModifiedBy: number | null;

  @Column("datetime2", { name: "ItemModifiedWhen", nullable: true })
  itemModifiedWhen: Date | null;

  @Column("int", { name: "ItemDeletedBy", nullable: true })
  itemDeletedBy: number | null;

  @Column("datetime2", { name: "ItemDeletedWhen", nullable: true })
  itemDeletedWhen: Date | null;

  @Column("int", { name: "ItemOrder", nullable: true })
  itemOrder: number | null;

  @Column("nvarchar", { name: "status", nullable: true, length: 3 })
  status: string | null;

  @Column("int", { name: "proposal_resolution_id", nullable: true })
  proposalResolutionId: number | null;

  @Column("int", { name: "file_id", nullable: true })
  fileId: number | null;
}
