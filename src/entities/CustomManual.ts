import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_custom_Manual", ["manualId"], { unique: true })
@Entity("custom_Manual", { schema: "dbo" })
export class CustomManual {
  @PrimaryGeneratedColumn({ type: "int", name: "ManualID" })
  manualId: number;

  @Column("nvarchar", { name: "name", length: 200 })
  name: string;

  @Column("uniqueidentifier", { name: "file" })
  file: string;
}
