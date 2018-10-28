import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WallpaperRequest } from '../../../shared/models/wallpaperRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WallpaperService {
  private wallpaperURL: string = "/assets/data/wallpaper.json";

  constructor(private http: HttpClient) { }

  getWallpapers(): Observable<WallpaperRequest> {
    return this.http.get<WallpaperRequest>(this.wallpaperURL);
  }

  public getWallpaperImage(imageURL: string): Observable<Blob> {
    return this.http
      .get(imageURL, {
        responseType: "blob"
      });
  }
}