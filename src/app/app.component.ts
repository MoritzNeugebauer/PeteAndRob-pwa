import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Pete & Rob';

  constructor(private swUpdate: SwUpdate) {
  }

  ngOnInit() {
      if (this.swUpdate.isEnabled) {
          this.swUpdate.available.subscribe(() => {
              if(confirm("New version of Pete & Rob available. Would you like to use it?")) {
                  window.location.reload();
              }
          });
      }        
}
}
