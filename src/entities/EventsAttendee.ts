import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("PK_Events_Attendee", ["attendeeId"], { unique: true })
@Entity("Events_Attendee", { schema: "dbo" })
export class EventsAttendee {
  @PrimaryGeneratedColumn({ type: "int", name: "AttendeeID" })
  attendeeId: number;

  @Column("nvarchar", {
    name: "AttendeeEmail",
    length: 254,
    default: () => "N''",
  })
  attendeeEmail: string;

  @Column("nvarchar", {
    name: "AttendeeFirstName",
    nullable: true,
    length: 100,
    default: () => "N''",
  })
  attendeeFirstName: string | null;

  @Column("nvarchar", {
    name: "AttendeeLastName",
    nullable: true,
    length: 100,
    default: () => "N''",
  })
  attendeeLastName: string | null;

  @Column("nvarchar", {
    name: "AttendeePhone",
    nullable: true,
    length: 50,
    default: () => "N''",
  })
  attendeePhone: string | null;

  @Column("int", { name: "AttendeeEventNodeID" })
  attendeeEventNodeId: number;

  @Column("uniqueidentifier", {
    name: "AttendeeGUID",
    default: () => "'00000000-0000-0000-0000-000000000000'",
  })
  attendeeGuid: string;

  @Column("datetime2", {
    name: "AttendeeLastModified",
    default: () => "'1/20/2015 8:52:25 AM'",
  })
  attendeeLastModified: Date;
}
