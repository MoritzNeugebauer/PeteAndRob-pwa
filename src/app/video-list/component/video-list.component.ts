import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../video/service/video.service';
import { DataService } from "../../../shared/data-service/data.service";
import { Video } from "../../../shared/models/video";
import { HeaderService } from '../../modules/header/service/header.service';

@Component({
  selector: 'par-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})

export class VideoListComponent implements OnInit {
  public videoList = [];
  public videoDetail: Video;
  public isLoading: boolean;
  public errorLoading: boolean

  constructor(private headerService:HeaderService, private videoService: VideoService, private data: DataService) { }

  ngOnInit() {
    this.headerService.setTitle('Videos');

    // gets the videos and listens to changes
    this.isLoading = true;
    this.errorLoading = false;
    this.videoService.getVideos()
    .subscribe(data => {
        this.isLoading = false;
        this.errorLoading = false;
        this.videoList = data.videos;
        for(let i=0; i<this.videoList.length; i++) {
          this.videoList[i].videoId = i;
        }
        this.data.changeVideoList(this.videoList);
      }, error => {
        this.isLoading = false;
        this.errorLoading = true;
      });
      
    // listens to changes in videoDetail
    this.data.currentVideoMessage.subscribe(videoDetail => this.videoDetail = videoDetail);
  }

  // sets the videoDetail to a given id
  setVideoDetail(i: number) {
    this.data.changeVideoDetail(this.videoList[i]);
  }

}
