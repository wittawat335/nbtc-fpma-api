import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_FPMA_Notification", ["itemId"], { unique: true })
@Entity("FPMA_Notification", { schema: "dbo" })
export class FpmaNotification {
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

  @Column("nvarchar", { name: "type", nullable: true, length: 20 })
  type: string | null;

  @Column("int", { name: "notification_ref_type", nullable: true })
  notificationRefType: number | null;

  @Column("int", { name: "notification_ref_id", nullable: true })
  notificationRefId: number | null;

  @Column("int", { name: "receive_userid", nullable: true })
  receiveUserid: number | null;

  @Column("nvarchar", { name: "message", nullable: true })
  message: string | null;

  @Column("datetime2", { name: "read_when", nullable: true })
  readWhen: Date | null;

  @Column("nvarchar", { name: "url", nullable: true, length: 200 })
  url: string | null;
}
