import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { json } from 'express';
import { lastValueFrom } from 'rxjs';

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
  message: any;
  q: any;

  constructor(private apiService: ApiService, private route: Router) { }

  ngOnInit() {
    this.getTags();
  }

  callExpress() {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });
  }

  private getTags() {
    fetch('./assets/data/tags-alpha-new.json').then(res => res.json())
      .then(jsonData => {
        if (jsonData) {
          this.entryList = jsonData;
          this.tempArray = JSON.parse(JSON.stringify(this.entryList));
          // this.getFileInfo();
        }
      });
  }

  getJsonTags() {
    fetch('./assets/data/tag-array.json').then(res => res.json())
      .then(jsonData => {
        if (jsonData) {
          this.entryList = jsonData;
          this.tempArray = JSON.parse(JSON.stringify(this.entryList));
          this.getFileInfo();
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

  async searchByTag(tag: any) {
    try {
      this.data = await lastValueFrom(this.apiService.searchByTag(tag));
      console.log('tag data: ', JSON.stringify(this.data));
      this.fileData = JSON.parse(JSON.stringify(this.data));
      if (this.fileData.data.entries.length >= 0) {
        this.writeJson(tag, this.fileData.data.entries.length);
        // this.removeTag(this.fileData.data.entries);
      }
      this.tag = tag;
    } catch (error) {
      console.error(error);
    }
  }

  getFileInfo() {
    if (this.tempArray.length > 0) {
      let obj = this.tempArray.shift();
      this.searchByTag(obj.tag);
    }
  }

  removeTag(fileData: any) {
    console.log('fileData: ', fileData);
    fileData.forEach((value: any) => {
      console.log(value);
      if (value.type === 'folder') {
        this.apiService.removeTag(value.tags, value.id).subscribe((data: any) => {
          console.log('data: ', data);
        });
      }
    });

  }

  writeJson(tag: string, count: number) {
    this.apiService.writeJson(tag, count).subscribe(data => {
      this.data = data;
      console.log(JSON.stringify(data));
      this.getFileInfo()
    });
  }

}
