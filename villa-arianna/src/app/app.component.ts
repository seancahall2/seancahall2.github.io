import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { json } from 'express';

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
  tempArray: any;
  tempTag: any;
  message: any;
  q: any;

  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit() {
    this.getTags();
    this.callExpress();
  }

  callExpress() {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });
  }

  private getTags() {
    fetch('./assets/data/tags-alpha.json').then(res => res.json())
      .then(jsonData => {
        if (jsonData) {
          this.entryList = jsonData;
          // const sorted = this.entryList.sort();
          // this.tempArray = JSON.parse(JSON.stringify(this.entryList));
          // console.log('sorted: ' + JSON.stringify(this.entryList));
          // this.getFileInfo();
        }
      });
  }

  setTag(obj: any) {
    this.route.navigate(['/tag-search'], { queryParams: { tag: obj.entry.tag } });
  }

  setSearchTerm(form: NgForm) {
    let myterm = JSON.parse(JSON.stringify(form.form.value));
    form.reset();
    this.q = myterm.q;
    this.route.navigate(['free-text-search'], { queryParams: { searchTerm: this.q } });
  }

  getFileInfo() {
    let obj = this.tempArray.shift();
    this.tempTag = obj;
    this.apiService.searchByTag(obj).subscribe(items => {
      console.log('tag data: ', JSON.stringify(items));
      this.fileData = JSON.parse(JSON.stringify(items))
      // this.fileData = items;
      this.writeJson(this.tempTag, this.fileData.data.total_count);
      if (this.tempArray.length > 0) {
        this.getFileInfo();
      }
    });
  }

  writeJson(tag: string, count: number) {
    this.apiService.writeJson(tag, count).subscribe(data => {
      this.data = data;
      console.log(JSON.stringify(data));
    });
  }

}
