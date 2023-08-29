import { Component } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  data: any;

  private getTags() {
    fetch('../assets/tags.json').then(res => res.json())
      .then(jsonData => {
        this.data = jsonData;
      });
  }
}
