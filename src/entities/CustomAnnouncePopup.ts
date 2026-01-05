import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_custom_AnnouncePopup", ["announcePopupId"], { unique: true })
@Entity("custom_AnnouncePopup", { schema: "dbo" })
export class CustomAnnouncePopup {
  @PrimaryGeneratedColumn({ type: "int", name: "AnnouncePopupID" })
  announcePopupId: number;

  @Column("nvarchar", { name: "name", length: 200 })
  name: string;

  @Column("nvarchar", { name: "desc" })
  desc: string;

  @Column("uniqueidentifier", { name: "img" })
  img: string;
}
