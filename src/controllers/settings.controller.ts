import { NextFunction, Request, Response } from 'express';
import { SettingsService } from '../service/settings.service';

export class SettingsController {
  static async getNote(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(await SettingsService.getNote());
      next();
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
      next();
    }
  }

  static async saveNote(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(await SettingsService.saveNote(req.body));
      next();
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
      next();
    }
  }

  static async getNoteByType(req: Request, res: Response, next: NextFunction) {
    try {
      res
        .status(200)
        .json(await SettingsService.getNoteByType(parseInt(req.params.type)));
      next();
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
      next();
    }
  }
}
