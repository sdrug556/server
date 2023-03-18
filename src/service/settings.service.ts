import { AppDataSource } from '../data-source';
import { Notes } from '../entity/Notes';

export class SettingsService {
  static async getNote(): Promise<Notes[]> {
    const repo = AppDataSource.getRepository(Notes);
    return repo.find({});
  }

  static async saveNote(notes: Notes[]): Promise<boolean> {
    const repo = AppDataSource.getRepository(Notes);
    notes.forEach(async (note) => {
      await repo.manager.save(repo.create(note));
    });
    return true;
  }

  static async getNoteByType(type: number): Promise<Notes> {
    const repo = AppDataSource.getRepository(Notes);
    return repo.findOneOrFail({
      where: { type },
    });
  }
}
