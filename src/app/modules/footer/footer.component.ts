import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'par-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  hideFooter() {
    let hideFooter = false;
    let path = this.location.path();
    let pagesWithoutFooter = ['infos'];

    for(var i=0; i<pagesWithoutFooter.length; i++) {
      let pageWithoutFooter = pagesWithoutFooter[i];

      if(path.includes(pageWithoutFooter)) {
        hideFooter = true;
      }
    }

    return hideFooter;
  }

}
