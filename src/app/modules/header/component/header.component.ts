import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'par-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public title = 'test';

  constructor(private location:Location, private headerService:HeaderService) { }

  ngOnInit() {
    this.headerService.title.subscribe(newTitle => {
      this.title = newTitle;
    });
  }

  goBack() {
    this.location.back();
  }

  hideBackButton() {
    let hideBackButton = true;
    let path = this.location.path();
    let pagesWithBackButton = ['videos/', 'wallpapers/', 'infos', 'instaFeed/'];

    for(let i=0; i<pagesWithBackButton.length; i++) {
      let pageWithBackButton = pagesWithBackButton[i];

      if(path.includes(pageWithBackButton)) {
        hideBackButton = false;
      }
    }

    return hideBackButton;
  }

  hideInfoButton() {
    let hideInfoButton = false;
    let path = this.location.path();
    let pagesWithoutInfoButton = ['videos/', 'wallpapers/', 'infos', 'instaFeed/'];

    for(let i=0; i<pagesWithoutInfoButton.length; i++) {
      let pageWithoutInfoButton = pagesWithoutInfoButton[i];

      if(path.includes(pageWithoutInfoButton)) {
        hideInfoButton = true;
      }
    }

    return hideInfoButton;
  }

  hideLogo() {
    let hideLogo = false;
    let path = this.location.path();
    let pagesWithoutLogo = ['videos/', 'wallpapers/', 'infos', 'instaFeed/'];

    for(let i=0; i<pagesWithoutLogo.length; i++) {
      let pageWithoutLogo = pagesWithoutLogo[i];

      if(path.includes(pageWithoutLogo)) {
        hideLogo = true;
      }
    }

    return hideLogo;
  }

}
