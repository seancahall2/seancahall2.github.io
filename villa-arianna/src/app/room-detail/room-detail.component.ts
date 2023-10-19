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

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
      if (params['searchTerm']) {
        this.getRoomDetail(params['searchTerm']);
      }
    })
  }

  getRoomDetail(id: any) {
    console.log("id: ", id);
    if (id && id.length > 0) {
      this.apiService.getFolderItems(id).subscribe(items => {
        this.data = items;
        console.log("room detail data: ", this.data);
      });
    }
  }


  getFolderItems(id: any) {
    this.apiService.getFolderItems(id).subscribe(items => {
      this.data = items;
    });
  }

}
