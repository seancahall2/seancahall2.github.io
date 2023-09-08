import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Villa Arianna';
  data: any;
  tag: any;
  entryList: any;
  fileData: any;
  searchTerm: any;
  message: any;

  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit() {
    this.getTags();
    this.callExpress();
    //  this.getFileInfo(1017868008921);
  }

  callExpress() {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });
  }

  private getTags() {
    fetch('./assets/data/tags.json').then(res => res.json())
      .then(jsonData => {
        if (jsonData) {
          this.entryList = Object.entries(jsonData);
        }
      });
  }

  setTag(obj: any) {
    this.tag = obj.entry;
    this.route.navigate(['tag-search', obj.entry]);
  }

  setSearchTerm(obj: any) {
    console.log(JSON.stringify(obj.target.value));
    // const state = { obj.target.value };
    this.route.navigate(['free-text-search', obj.target.value]);
  }

  getFileInfo(obj: any) {
    this.apiService.getFileInfo(obj.entry).subscribe(items => {
      console.log(JSON.stringify(items));
      this.fileData = items;
      // this.writeJson(obj.entry, this.data.data.total_count);
    });
  }

  writeJson(tag: string, count: number) {
    this.apiService.writeJson(tag, count).subscribe(data => {
      this.data = data;
      console.log(JSON.stringify(data));
    });
  }


}
