import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  // กำหนด Primary Key และประเภทข้อมูล
  @PrimaryGeneratedColumn()
  id!: number;

  // กำหนดฟิลด์ email ที่ไม่สามารถซ้ำกันและต้องมีค่า
  @Column({ type: "varchar", length: 100, unique: true })
  email!: string;

  // กำหนดฟิลด์ password
  @Column({ type: "varchar", length: 100, nullable: true })
  password?: string;

  // กำหนดฟิลด์ name
  @Column({ type: "varchar", length: 100, nullable: true })
  name?: string;

  // กำหนดฟิลด์ student
  @Column({ type: "varchar", length: 100, nullable: true })
  student?: string;

  // กำหนดฟิลด์ domain
  @Column({ type: "varchar", length: 100, nullable: true })
  domain?: string;
}
