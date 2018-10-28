import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from '../models/video';
import { Wallpaper } from '../models/wallpaper';
import { InstaFeedData } from '../models/instaFeedData';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private videoSource = new BehaviorSubject<Video>(new Video);
  currentVideoMessage = this.videoSource.asObservable();

  private wallpaperSource = new BehaviorSubject<Wallpaper>(new Wallpaper);
  currentWallpaperMessage = this.wallpaperSource.asObservable();

  private videoList: Video[] = [];
  private videoListSource = new BehaviorSubject<Video[]>(this.videoList);
  currentVideoListMessage = this.videoListSource.asObservable();

  private instaSource = new BehaviorSubject<InstaFeedData>(new InstaFeedData);
  currentInstaItemMessage = this.instaSource.asObservable();

  private instaFeed: InstaFeedData[] = [];
  private instaFeedSource = new BehaviorSubject<InstaFeedData[]>(this.instaFeed);
  currentInstaFeedMessage = this.instaFeedSource.asObservable();

  constructor() { }

  changeInstaItemDetail(instaMessage: InstaFeedData) {
    this.instaSource.next(instaMessage);
  }

  changeInstaFeed(instaFeed: InstaFeedData[]) {
    this.instaFeedSource.next(instaFeed);
  }

  changeVideoDetail(videoMessage: Video) {
    this.videoSource.next(videoMessage)
  }

  changeVideoList(videoList: Video[]) {
    this.videoListSource.next(videoList);
  }

  changeWallpaperDetail(wallpaperMessage: Wallpaper) {
    this.wallpaperSource.next(wallpaperMessage)
  }
}
