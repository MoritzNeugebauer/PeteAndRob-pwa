import { Component, OnInit } from '@angular/core';
import { WallpaperService } from '../../wallpaper/service/wallpaper.service';
import { DataService } from "../../../shared/data-service/data.service";
import { Wallpaper } from '../../../shared/models/wallpaper';
import { HeaderService } from '../../modules/header/service/header.service';

@Component({
  selector: 'par-wallpaper-list',
  templateUrl: './wallpaper-list.component.html',
  styleUrls: ['./wallpaper-list.component.scss']
})
export class WallpaperListComponent implements OnInit {
  public wallpaperList = [];
  public wallpaperDetail: Wallpaper;
  public isLoading: boolean;
  public errorLoading: boolean;

  constructor(private headerService:HeaderService, private wallpaperService: WallpaperService, private data: DataService) { }

  ngOnInit() {
    this.headerService.setTitle('Wallpaper');

    // gets the wallpapers and listens to changes
    this.isLoading = true;
    this.errorLoading = false;
    this.wallpaperService.getWallpapers()
      .subscribe(data => {
        this.isLoading = false;
        this.errorLoading = false;
        this.wallpaperList = data.wallpaper
      }, error => {
        this.isLoading = false;
        this.errorLoading = true;
        console.log("fehler beim laden der wallpaper");
      });

    // listens to changes in wallpaperDetail
    this.data.currentWallpaperMessage.subscribe(wallpaperDetail => this.wallpaperDetail = wallpaperDetail);
  }

  // sets the wallpaperDetail to a given id
  setWallpaperDetail(i: number) {
    this.data.changeWallpaperDetail(this.wallpaperList[i]);
  }

}
