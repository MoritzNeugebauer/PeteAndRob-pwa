import { Wallpaper } from './wallpaper';

export class WallpaperRequest {
  info: {
    start: string;
    limit: string;
    total: string;
  };
  wallpaper: Wallpaper[];
}