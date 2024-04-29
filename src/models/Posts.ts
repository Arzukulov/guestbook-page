import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ type: 'varchar' })
    Name: string;

    @Column({ type: 'text' })
    Description: string;

    @Column({ type: 'int', nullable: true }) // Указываем тип данных для поля UserId
    UserId: number | null;

    @CreateDateColumn()
    Created_At: Date;

    @UpdateDateColumn({ nullable: true })
    Deleted_At: Date | null;

    constructor() {
        this.Id = 0;
        this.Name = '';
        this.Description = '';
        this.UserId = null;
        this.Created_At = new Date();
        this.Deleted_At = null;
    }
}
