import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data-service/data.service';
import { InstaFeedData } from '../../shared/models/instaFeedData';
import { InstaService } from '../insta-feed/service/insta.service';
import { Router, ActivatedRoute, RouterEvent } from '@angular/router';
import { HeaderService } from '../modules/header/service/header.service';

@Component({
  selector: 'par-insta-item-detail',
  templateUrl: './insta-item-detail.component.html',
  styleUrls: ['./insta-item-detail.component.scss']
})
export class InstaItemDetailComponent implements OnInit {
  public isLoading : boolean;
  public errorLoading: boolean;
  public instaItem: InstaFeedData;
  public instaFeed: InstaFeedData[];
  private instaItemId: String;

  constructor(private headerService:HeaderService, private data: DataService, private instaService:InstaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.headerService.setTitle('Instagram');

    this.isLoading = true;
    this.errorLoading = false;

    this.data.currentInstaItemMessage.subscribe(instaItem => {
      this.isLoading = false;
      this.errorLoading = false;
      this.instaItem = instaItem;
      
      window.scrollTo({
        top: 0,
      });
    }, error => {
      this.isLoading = false;
      this.errorLoading = true;
    });

    this.instaItemId = this.route.snapshot.paramMap.get("i");

    // load videos once again if insta image is undefined (can happen on reload)
    if(typeof this.instaItem.images === 'undefined') {
      this.isLoading = true;

      this.instaService.getInstaFeed()
        .subscribe(feed => {
          this.isLoading = false;
          this.errorLoading = false;
          this.instaFeed = feed.data;

          for(let i=0; i<this.instaFeed.length; i++) {
            if(this.instaFeed[i].id == this.instaItemId ) {
              this.instaItem = this.instaFeed[i];
            }
          }
        }, error => {
          this.isLoading = false;
          this.errorLoading = true;
        });
    }
  }
}
