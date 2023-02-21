import { Router } from 'express';
import { SettingsController } from '../controllers/settings.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const settingsRoute = Router();

settingsRoute.get(
  '/api/settings/note',
  JwtMiddleware.verify,
  SettingsController.getNote,
);

settingsRoute.post(
  '/api/settings/note',
  JwtMiddleware.verify,
  SettingsController.saveNote,
);

settingsRoute.get(
  '/api/settings/note/:type',
  JwtMiddleware.verify,
  SettingsController.getNoteByType,
);

export default settingsRoute;
