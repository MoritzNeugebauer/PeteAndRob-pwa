import { Video } from './video';

export class VideoRequest {
  info: {
    start: string;
    limit: string;
    total: string;
  };
  videos: Video[];
}