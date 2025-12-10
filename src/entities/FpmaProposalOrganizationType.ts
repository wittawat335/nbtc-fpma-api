import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Proposal_Organization_Type", ["itemId"], { unique: true })
@Entity("FPMA_Proposal_Organization_Type", { schema: "dbo" })
export class FpmaProposalOrganizationType {
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

  @Column("nvarchar", { name: "number", nullable: true, length: 20 })
  number: string | null;

  @Column("int", { name: "organization_type", nullable: true })
  organizationType: number | null;

  @Column("nvarchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @Column("int", { name: "section_id", nullable: true })
  sectionId: number | null;

  @Column("nvarchar", { name: "status", nullable: true, length: 2 })
  status: string | null;
}
