import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Villa Arianna';
  data: any;
  entryList: any;

  ngOnInit() {
    this.getTags();
  }

  private getTags() {
    fetch('./assets/data/tags.json').then(res => res.json())
      .then(jsonData => {
        this.data = jsonData;
        if (this.data) {
          this.entryList = Object.entries(this.data);
        }
      });
  }

}
