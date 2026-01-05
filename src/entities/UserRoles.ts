import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Users } from './Users';
import { Roles } from './Roles';

@Index("PK__UserRole__3214EC07DA77D4A0", ["id"], { unique: true })
@Entity("UserRoles", { schema: "dbo" })
export class UserRoles {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "UserId" })
  userId: number;

  @Column("int", { name: "RoleId" })
  roleId: number;

  @ManyToOne(() => Users, user => user.userRoles)
@JoinColumn({ name: 'UserId' })
user: Users;

@ManyToOne(() => Roles, role => role.userRoles)
@JoinColumn({ name: 'RoleId' })
role: Roles;

}
