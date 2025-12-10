import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_custom_AnnouncePopup", ["announcePopupId"], { unique: true })
@Entity("custom_AnnouncePopup", { schema: "dbo" })
export class CustomAnnouncePopup {
  @PrimaryGeneratedColumn({ type: "int", name: "AnnouncePopupID" })
  announcePopupId: number;

  @Column("nvarchar", { name: "name", length: 200, default: () => "N''" })
  name: string;

  @Column("nvarchar", { name: "desc", default: () => "N''" })
  desc: string;

  @Column("uniqueidentifier", {
    name: "img",
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  img: string;
}
