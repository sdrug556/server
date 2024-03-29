import { dateNowUTC } from '../utilities/date';
import { AppDataSource } from '../data-source';
import { History, TABLE_History } from '../entity/History';
import { TABLE_user } from '../entity/User';

export class HistoryService {

  static async getAll(): Promise<History[]> {
    const query = `
      SELECT
        ru."id" AS id,
        ru."firstName" AS "firstName",
        ru."lastName" AS "lastName",
        rh."action" ,
        rh."createdDate" from "${TABLE_History}" rh 
        INNER JOIN "${TABLE_user}" ru ON rh."userId" = ru."id"
        ORDER BY rh."createdDate";
    `
    const histories = await AppDataSource.query(query);
    return histories.map((history) => {
      history.fullName = history.firstName + ' ' + history.lastName;
      return history;
    });
  }

  static async add(userId: number, action: string, date?: number): Promise<History> {
    const repo = AppDataSource.getRepository(History);
    const history = repo.create({
      userId,
      action,
      createdDate: date ?? dateNowUTC()
    });
    return await repo.manager.save(history);
  }

}

