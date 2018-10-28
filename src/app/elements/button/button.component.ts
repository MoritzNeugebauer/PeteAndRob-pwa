import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'par-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title: string;
  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  buttonClicked() {
    this.buttonClick.emit("asd");
}

}
