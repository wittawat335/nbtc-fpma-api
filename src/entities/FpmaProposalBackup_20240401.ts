import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("FPMA_Proposal_backup_20240401", { schema: "dbo" })
export class FpmaProposalBackup_20240401 {
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

  @Column("uniqueidentifier", { name: "ItemGUID" })
  itemGuid: string;

  @Column("int", { name: "proposal_status_id", nullable: true })
  proposalStatusId: number | null;

  @Column("int", { name: "annoucement_id", nullable: true })
  annoucementId: number | null;

  @Column("int", { name: "tor_id", nullable: true })
  torId: number | null;

  @Column("nvarchar", {
    name: "organization_name",
    nullable: true,
    length: 400,
  })
  organizationName: string | null;

  @Column("nvarchar", { name: "department_name", nullable: true, length: 400 })
  departmentName: string | null;

  @Column("nvarchar", { name: "tor_name", nullable: true, length: 4000 })
  torName: string | null;

  @Column("decimal", {
    name: "budget",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  budget: number | null;

  @Column("int", { name: "duration", nullable: true })
  duration: number | null;

  @Column("int", { name: "organization_type_id", nullable: true })
  organizationTypeId: number | null;

  @Column("nvarchar", {
    name: "organization_type_name",
    nullable: true,
    length: 150,
  })
  organizationTypeName: string | null;

  @Column("nvarchar", { name: "resposiible_person", nullable: true })
  resposiiblePerson: string | null;

  @Column("nvarchar", { name: "authority_person", nullable: true })
  authorityPerson: string | null;

  @Column("nvarchar", { name: "attorney_person", nullable: true })
  attorneyPerson: string | null;

  @Column("nvarchar", { name: "contact_person", nullable: true })
  contactPerson: string | null;

  @Column("nvarchar", { name: "project_address", nullable: true })
  projectAddress: string | null;

  @Column("nvarchar", { name: "contact_address", nullable: true })
  contactAddress: string | null;

  @Column("nvarchar", { name: "organization_data", nullable: true })
  organizationData: string | null;

  @Column("int", { name: "organization_status_id", nullable: true })
  organizationStatusId: number | null;

  @Column("nvarchar", { name: "tax_id", nullable: true, length: 20 })
  taxId: string | null;

  @Column("nvarchar", { name: "tax_branch_code", nullable: true, length: 20 })
  taxBranchCode: string | null;

  @Column("int", { name: "vat", nullable: true })
  vat: number | null;

  @Column("int", { name: "withholding_tax", nullable: true })
  withholdingTax: number | null;

  @Column("int", { name: "tax_exemption", nullable: true })
  taxExemption: number | null;

  @Column("nvarchar", { name: "more_data_1", nullable: true })
  moreData_1: string | null;

  @Column("nvarchar", { name: "name", nullable: true })
  name: string | null;

  @Column("nvarchar", { name: "name_en", nullable: true })
  nameEn: string | null;

  @Column("nvarchar", { name: "type", nullable: true, length: 20 })
  type: string | null;

  @Column("nvarchar", { name: "previous_proposal", nullable: true })
  previousProposal: string | null;

  @Column("nvarchar", { name: "relation_with_other", nullable: true })
  relationWithOther: string | null;

  @Column("nvarchar", { name: "beneficiary", nullable: true })
  beneficiary: string | null;

  @Column("nvarchar", { name: "goverment_policy", nullable: true })
  govermentPolicy: string | null;

  @Column("nvarchar", { name: "principles_of", nullable: true })
  principlesOf: string | null;

  @Column("nvarchar", { name: "objective", nullable: true })
  objective: string | null;

  @Column("nvarchar", { name: "scope_of_work", nullable: true })
  scopeOfWork: string | null;

  @Column("nvarchar", { name: "expect_result", nullable: true })
  expectResult: string | null;

  @Column("nvarchar", { name: "kpi_of_success", nullable: true })
  kpiOfSuccess: string | null;

  @Column("nvarchar", { name: "other_kpi_of_success", nullable: true })
  otherKpiOfSuccess: string | null;

  @Column("nvarchar", { name: "theory", nullable: true })
  theory: string | null;

  @Column("nvarchar", { name: "technical_concept", nullable: true })
  technicalConcept: string | null;

  @Column("nvarchar", { name: "step_of_work", nullable: true })
  stepOfWork: string | null;

  @Column("nvarchar", { name: "risk", nullable: true })
  risk: string | null;

  @Column("nvarchar", { name: "place_of_work", nullable: true })
  placeOfWork: string | null;

  @Column("nvarchar", { name: "teams", nullable: true })
  teams: string | null;

  @Column("nvarchar", { name: "other_budget", nullable: true })
  otherBudget: string | null;

  @Column("nvarchar", { name: "reference", nullable: true })
  reference: string | null;

  @Column("int", { name: "license_agreement_id", nullable: true })
  licenseAgreementId: number | null;

  @Column("nvarchar", {
    name: "license_agreement_name",
    nullable: true,
    length: 250,
  })
  licenseAgreementName: string | null;

  @Column("nvarchar", {
    name: "license_agreement_note",
    nullable: true,
    length: 500,
  })
  licenseAgreementNote: string | null;

  @Column("nvarchar", { name: "sustain", nullable: true })
  sustain: string | null;

  @Column("int", { name: "preparedness_id", nullable: true })
  preparednessId: number | null;

  @Column("nvarchar", {
    name: "preparedness_name",
    nullable: true,
    length: 250,
  })
  preparednessName: string | null;

  @Column("nvarchar", {
    name: "preparedness_note",
    nullable: true,
    length: 500,
  })
  preparednessNote: string | null;

  @Column("nvarchar", {
    name: "is_part_of_work_get_other_budget",
    nullable: true,
    length: 200,
  })
  isPartOfWorkGetOtherBudget: string | null;

  @Column("nvarchar", {
    name: "part_of_work_get_other_budget_note",
    nullable: true,
  })
  partOfWorkGetOtherBudgetNote: string | null;

  @Column("nvarchar", { name: "other_relative_license", nullable: true })
  otherRelativeLicense: string | null;

  @Column("nvarchar", { name: "swot_analysis", nullable: true })
  swotAnalysis: string | null;

  @Column("nvarchar", { name: "other_note", nullable: true })
  otherNote: string | null;

  @Column("nvarchar", { name: "more_data_2", nullable: true })
  moreData_2: string | null;

  @Column("int", { name: "relative_license_id", nullable: true })
  relativeLicenseId: number | null;

  @Column("nvarchar", {
    name: "relative_license_name",
    nullable: true,
    length: 150,
  })
  relativeLicenseName: string | null;

  @Column("nvarchar", {
    name: "relative_license_note",
    nullable: true,
    length: 250,
  })
  relativeLicenseNote: string | null;

  @Column("nvarchar", {
    name: "organization_status_name",
    nullable: true,
    length: 150,
  })
  organizationStatusName: string | null;

  @Column("nvarchar", { name: "dev", nullable: true, length: 200 })
  dev: string | null;

  @Column("nvarchar", { name: "budget_01", nullable: true })
  budget_01: string | null;

  @Column("nvarchar", { name: "budget_02", nullable: true })
  budget_02: string | null;

  @Column("nvarchar", { name: "budget_03", nullable: true })
  budget_03: string | null;

  @Column("nvarchar", { name: "budget_04", nullable: true })
  budget_04: string | null;

  @Column("nvarchar", { name: "budget_05", nullable: true })
  budget_05: string | null;

  @Column("nvarchar", { name: "budget_06", nullable: true })
  budget_06: string | null;

  @Column("decimal", {
    name: "budget_sub_total",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  budgetSubTotal: number | null;

  @Column("decimal", {
    name: "budget_vat",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  budgetVat: number | null;

  @Column("decimal", {
    name: "budget_total",
    nullable: true,
    precision: 20,
    scale: 2,
  })
  budgetTotal: number | null;

  @Column("nvarchar", { name: "more_data_3", nullable: true })
  moreData_3: string | null;

  @Column("datetime2", { name: "sent_when", nullable: true })
  sentWhen: Date | null;

  @Column("int", { name: "preparedness_sub_id", nullable: true })
  preparednessSubId: number | null;
}
