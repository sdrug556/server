import { createTransport } from 'nodemailer';
import { AppDataSource } from '../data-source';
import { Supplier, TABLE_supplier } from '../entity/Supplier';
import { dateNowUTC } from '../utilities/date';

export class SupplierService {
  static async getAll(): Promise<Supplier[]> {
    const repo = AppDataSource.getRepository(Supplier);
    return await repo.find({
      order: {
        id: 'ASC',
      },
      where: {
        isDeleted: false,
      },
    });
  }

  static async create(supplier: Supplier): Promise<number> {
    const repo = AppDataSource.getRepository<Supplier>(TABLE_supplier);
    supplier.createdDate = dateNowUTC();
    supplier.isDeleted = false;
    const newSupplier = await repo.manager.save(repo.create(supplier));
    return newSupplier.id;
  }

  static async update(
    id: number,
    supplier: Partial<Supplier>,
  ): Promise<boolean> {
    const repo = AppDataSource.getRepository(Supplier);
    const supplierData = await repo.findOneByOrFail({ id });
    if (!supplierData) {
      throw new Error('Supplier not found');
    }
    await repo.manager.save(
      repo.create({ ...(supplierData as any), ...supplier }),
    );
    return true;
  }

  static async delete(id: number): Promise<boolean> {
    const repo = AppDataSource.getRepository(Supplier);
    const supplierData = await repo.findOneByOrFail({ id });
    if (!supplierData) {
      throw new Error('product not found');
    }
    await repo.manager.save(
      repo.create({ ...(supplierData as any), ...{ isDeleted: true } }),
    );
    return true;
  }

  static async requestOrder(option: {
    to: string;
    email: string;
    body: string;
    subject: string;
  }): Promise<boolean> {
    return SupplierService.sendEmail(option);
  }

  static async sendEmail(option: {
    to: string;
    email: string;
    body: string;
    subject: string;
  }): Promise<boolean> {
    var transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'sdrug556',
        pass: 'mbmgxmytugiqxlod',
      },
    });
    try {
      const result = await transporter.sendMail({
        from: 'sdrug556@gmail.com',
        to: option.to,
        subject: option.subject,
        html: option.body,
      });
      return true;
    } catch (e) {
      console.log(e);
    }
  }
}
