import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Events_Attendee", ["attendeeId"], { unique: true })
@Entity("Events_Attendee", { schema: "dbo" })
export class EventsAttendee {
  @PrimaryGeneratedColumn({ type: "int", name: "AttendeeID" })
  attendeeId: number;

  @Column("nvarchar", { name: "AttendeeEmail", length: 254 })
  attendeeEmail: string;

  @Column("nvarchar", {
    name: "AttendeeFirstName",
    nullable: true,
    length: 100,
  })
  attendeeFirstName: string | null;

  @Column("nvarchar", { name: "AttendeeLastName", nullable: true, length: 100 })
  attendeeLastName: string | null;

  @Column("nvarchar", { name: "AttendeePhone", nullable: true, length: 50 })
  attendeePhone: string | null;

  @Column("int", { name: "AttendeeEventNodeID" })
  attendeeEventNodeId: number;

  @Column("uniqueidentifier", { name: "AttendeeGUID" })
  attendeeGuid: string;

  @Column("datetime2", { name: "AttendeeLastModified" })
  attendeeLastModified: Date;
}
