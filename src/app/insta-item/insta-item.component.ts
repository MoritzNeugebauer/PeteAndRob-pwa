import { Component, OnInit, Input } from '@angular/core';
import { InstaFeedData } from '../../shared/models/instaFeedData';
import { DataService } from "../../shared/data-service/data.service";

@Component({
  selector: 'par-insta-item',
  templateUrl: './insta-item.component.html',
  styleUrls: ['./insta-item.component.scss']
})
export class InstaItemComponent implements OnInit {
  @Input() instaFeedItem: InstaFeedData;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  setInstaDetail(instaItem: InstaFeedData) {
    this.data.changeInstaItemDetail(instaItem);
  }

}
