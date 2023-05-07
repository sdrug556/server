import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export const TABLE_product = 'product';
@Entity({ name: TABLE_product })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('int', { nullable: true })
  category: number;

  @Column('int')
  supplier: number;

  @Column('bigint', { nullable: true })
  price: number;

  @Column('bigint', { nullable: true })
  expiration: string;

  @Column('int', { nullable: true })
  stock: number;

  @Column('bigint', { nullable: true })
  createdDate: number;

  @Column('int')
  reorderPoint: number;

  @Column('int')
  createdBy: number;

  @Column('boolean')
  isDeleted: boolean;

  @Column('text', { nullable: true })
  barcode: string;

}

