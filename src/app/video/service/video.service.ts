import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoRequest } from '../../../shared/models/videoRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videoURL: string = "/assets/data/videos.json";

  constructor(private http: HttpClient) { }

  getVideos(): Observable<VideoRequest> {
    return this.http.get<VideoRequest>(this.videoURL);
  }
}
