
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ type: 'varchar' })
    Name: string;

    @Column({ type: 'varchar' })
    Email: string;

    @CreateDateColumn()
    Created_At: Date;

    @UpdateDateColumn({ nullable: true })
    Deleted_At: Date | null;

    constructor() {
        this.Id = 0;
        this.Name = '';
        this.Email =  '';
        this.Created_At = new Date();
        this.Deleted_At = null;
    }
}
