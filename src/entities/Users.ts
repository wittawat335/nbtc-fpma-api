import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UserRoles } from './UserRoles';

@Index("PK__Users__1788CC4C3441CCBA", ["userId"], { unique: true })
@Entity("Users", { schema: "dbo" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "UserId" })
  userId: number;

  @Column("nvarchar", { name: "Username", length: 50 })
  username: string;

  @Column("nvarchar", { name: "Password", length: 100 })
  password: string;

  @Column("nvarchar", { name: "FirstName", nullable: true, length: 100 })
  firstName: string | null;

  @Column("nvarchar", { name: "LastName", nullable: true, length: 100 })
  lastName: string | null;

  @Column("nvarchar", { name: "Email", nullable: true, length: 100 })
  email: string | null;

  @Column("nvarchar", { name: "Role", length: 50 })
  role: string;

  @Column("bit", { name: "IsActive", nullable: true, default: () => "(1)" })
  isActive: boolean | null;

  @Column("datetime", {
    name: "CreatedDate",
    nullable: true,
    default: () => "getdate()",
  })
  createdDate: Date | null;

  @OneToMany(() => UserRoles, ur => ur.user)
  userRoles: UserRoles[];
}
