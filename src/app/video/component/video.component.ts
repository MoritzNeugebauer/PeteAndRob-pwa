import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Video } from '../../../shared/models/video';
import { VideoService } from '../service/video.service';
import { DataService } from '../../../shared/data-service/data.service';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';
import { HeaderService } from '../../modules/header/service/header.service';

@Component({
  selector: 'par-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoComponent implements OnInit {
  public video: Video;
  public previousUrl: string;
  public videoList = [];
  public relatedVideos = [];
  public videoId: number;
  public isLoading : boolean;
  public errorLoading: boolean;

  constructor(private headerService:HeaderService, private videoService: VideoService, private data: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.headerService.setTitle('Video');
    this.isLoading = true;
    this.errorLoading = false;

    this.data.currentVideoMessage.subscribe(video => {
      this.isLoading = false;
      this.errorLoading = false;
      this.video = video;

      window.scrollTo({
        top: 0,
        //behavior: "smooth"
      });
    }, error => {
      this.isLoading = false;
      this.errorLoading = true;
    });

    this.videoId = +this.route.snapshot.paramMap.get("i");

    this.data.currentVideoListMessage.subscribe(videos => {
      this.isLoading = false;
      this.videoList = videos;
      this.relatedVideos = this.getRelatedVideos();
    });

    // load videos once again if video is undefined (can happen on reload)
    if(typeof this.video.video === 'undefined') {
      this.isLoading = true;

      this.videoService.getVideos()
        .subscribe(data => {
          this.isLoading = false;
          this.errorLoading = false;
          this.videoList = data.videos;

          for(let i=0; i<this.videoList.length; i++) {
            this.videoList[i].videoId = i;
          }
          this.relatedVideos = this.getRelatedVideos();

          this.video = data.videos[this.videoId];
          if(typeof this.video != 'undefined' && typeof this.video.video != 'undefined' && this.video.video != null) {
            this.setVideoSource(this.video.video);
          }
        }, error => {
          this.isLoading = false;
          this.errorLoading = true;
        });
    }

    // if detail page changes
    this.router.events.subscribe((value: RouterEvent) => {
      if(typeof value != 'undefined') {
        let url = value.url;
        if(typeof url != 'undefined') {
          let id = +url.substr(url.lastIndexOf('/') + 1);
          this.videoId = id;

          this.data.changeVideoDetail(this.videoList[this.videoId]);
          this.relatedVideos = this.getRelatedVideos();
          
          if(typeof this.video != 'undefined' && typeof this.video.video != 'undefined' && this.video.video != null) {
            this.setVideoSource(this.video.video);
          }

          let relatedVideoListElement: HTMLElement = document.getElementById('detail-relatedVideos-list');
          if(typeof relatedVideoListElement != 'undefined' && relatedVideoListElement != null) {
            relatedVideoListElement.scrollTo({
              left: 0,
            });
          }
        }
      }
    });
  }

  private setVideoSource(videoSource: string) {
    if(typeof document.getElementById('video') != 'undefined' && document.getElementById('video') != null) {
      var video = document.getElementById('video') as HTMLVideoElement;
      video.src = videoSource;
    }
  }

  private getRelatedVideos(): Video[] {
    let relatedVideos: Video[];
    if(typeof this.videoList != 'undefined' && this.videoList.length > 0) {
      relatedVideos = this.videoList.slice(this.videoId+1, this.videoId + 6);
    }
    return relatedVideos;
  }
}
