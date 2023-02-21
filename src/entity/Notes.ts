import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export const TABLE_notes = 'notes';
@Entity({ name: TABLE_notes })
export class Notes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: false })
  note: string;

  @Column('int', { nullable: false })
  type: number;

  @Column('bigint')
  createdDate: number;

  @Column('int', { nullable: false })
  createdBy: number;

}

