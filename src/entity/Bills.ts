import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const TABLE_bills = 'bills';
@Entity({ name: TABLE_bills })
export class Bills {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  shiftNumber: string;

  @Column('int')
  userId: number;

  @Column('double precision', { nullable: true }) openingCash: number;

  @Column('double precision', { nullable: true }) closingCash: number;

  @Column('double precision', { nullable: true }) oneThou: number;

  @Column('double precision', { nullable: true }) fiveHundred: number;

  @Column('double precision', { nullable: true }) twoHundred: number;

  @Column('double precision', { nullable: true }) oneHundred: number;

  @Column('double precision', { nullable: true }) fifty: number;

  @Column('double precision', { nullable: true }) ten: number;

  @Column('double precision', { nullable: true }) five: number;

  @Column('double precision', { nullable: true }) one: number;

  @Column('double precision', { nullable: true }) twentyFiveCents: number;

  @Column('double precision', { nullable: true }) createdDate: number;

  cashier: string;
}
