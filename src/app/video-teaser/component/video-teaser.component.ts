import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../../../shared/data-service/data.service";
import { Video } from "../../../shared/models/video";

@Component({
  selector: 'par-video-teaser',
  templateUrl: './video-teaser.component.html',
  styleUrls: ['./video-teaser.component.scss'],
})
export class VideoTeaserComponent implements OnInit {
  @Input() video: Video;
  
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  setVideoDetail(video: Video) {
    this.data.changeVideoDetail(video);
  }

}
