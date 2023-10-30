import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute, private apiService: ApiService) { }

  data: any;
  parentFolder: any;
  roomDetail: any;
  wallDetail: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
      this.parentFolder = JSON.parse(params['parentFolder']);
      if (this.parentFolder) {
        this.getRoomDetail(this.parentFolder.id);
      }

    })
  }

  getRoomDetail(id: any) {
    console.log("id: ", id);
    if (id && id.length > 0) {
      this.apiService.getFolderItems(id).subscribe(items => {
        this.data = items;
        this.getDescription();
      });
    }
  }

  private getDescription() {
    fetch('./assets/data/room-detail.json').then(res => res.json())
      .then(jsonData => {
        if (jsonData) {
          this.roomDetail = JSON.parse(JSON.stringify(jsonData));
          console.log("room detail data: ", this.roomDetail);
          this.wallDetail = this.roomDetail.filter((item: any) => item.folder === this.parentFolder.id)[0];
          console.log("wall detail: ", this.wallDetail);
        }
      });
  }

  setTag(obj: any) {
    console.log("obj: ", obj);
  }

  getFolderItems(id: any) {
    this.apiService.getFolderItems(id).subscribe(items => {
      this.data = items;
    });
  }

}
