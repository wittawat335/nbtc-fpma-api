import { Column, Entity, Index, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UserRoles } from './UserRoles';
@Index("PK__Roles__8AFACE1AACBB9C96", ["roleId"], { unique: true })
@Entity("Roles", { schema: "dbo" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "int", name: "RoleId" })
  roleId: number;

  @Column("nvarchar", { name: "RoleName", length: 50 })
  roleName: string;

  @Column("nvarchar", { name: "Description", nullable: true, length: 255 })
  description: string | null;

  @OneToMany(() => UserRoles, ur => ur.role)
  userRoles: UserRoles[];
}
