import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../modules/header/service/header.service';

@Component({
  selector: 'par-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit() {
    this.headerService.setTitle('Infos');
    window.scrollTo(0, 0);
  }

}
