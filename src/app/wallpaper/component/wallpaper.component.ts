import { Component, OnInit } from '@angular/core';
import { Wallpaper } from '../../../shared/models/wallpaper';
import { WallpaperService } from '../../wallpaper/service/wallpaper.service'
import { DataService } from '../../../shared/data-service/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../modules/header/service/header.service';

@Component({
  selector: 'par-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss']
})
export class WallpaperComponent implements OnInit {
  public wallpaper: Wallpaper;
  public previousUrl: string;
  public wallpaperList = [];
  public isLoading: boolean;

  constructor(private headerService:HeaderService, private wallpaperService: WallpaperService, private data: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.headerService.setTitle('Wallpaper');

    this.isLoading = true;
    this.data.currentWallpaperMessage.subscribe(wallpaper => {
      this.isLoading = false;
      this.wallpaper = wallpaper;
      this.headerService.setTitle(this.wallpaper.title);
      window.scrollTo(0, 0);
    });

    // load wallpaper once again if wallpaper is undefined (can happen on reload)
    if(typeof this.wallpaper.high === 'undefined') {
      console.log("this.wallpaper == undefined");
      var i = this.route.snapshot.paramMap.get("i");
      var id = +i;
      this.wallpaperService.getWallpapers()
        .subscribe(data => {
          this.isLoading = false;
          this.wallpaper = data.wallpaper[id];
          this.headerService.setTitle(this.wallpaper.title);
        });
    }
  }

  downloadWallpaper() {
    this.wallpaperService.getWallpaperImage(this.wallpaper.normal).subscribe(
      (res) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(res);
        a.download = this.wallpaper.title;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(this.wallpaper.normal);
      }
    );
  }

}
