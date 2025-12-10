import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Master_Proposal_Status", ["itemId"], { unique: true })
@Entity("FPMA_Master_Proposal_Status", { schema: "dbo" })
export class FpmaMasterProposalStatus {
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

  @Column("int", { name: "proposal_step_id", default: () => "(0)" })
  proposalStepId: number;

  @Column("nvarchar", { name: "number", nullable: true, length: 20 })
  number: string | null;

  @Column("nvarchar", { name: "name_staff", nullable: true, length: 200 })
  nameStaff: string | null;

  @Column("nvarchar", { name: "name_enduser", nullable: true, length: 200 })
  nameEnduser: string | null;

  @Column("nvarchar", { name: "description", nullable: true })
  description: string | null;
}
