import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.scss']
})
export class TextSearchComponent {
  data: any;
  message: any;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  ngOnInit() {
    // this.doSearch();
    // this.newMethod();
  }

  callExpress() {
    this.apiService.getMessage().subscribe(data => {
      this.message = data;
    });
  }

  testAuth() {
    this.apiService.testAuth().subscribe(data => {
      this.message = data;
    });
  }

  getFolderItems() {
    this.apiService.getFolderItems().subscribe(items => {
      this.data = items;
    });
  }

  doSearch() {
    this.apiService.doSearch('chlamys').subscribe(items => {
      this.data = items;
    });
  }

  async getData() {
    const url = `https://api.thecatapi.com/v1/breeds`;
    const api_key = "live_MmD2P6PoLQdaDaoY0nSTHTvlSlarHqEgIbvs2V39n233mkkg2CnZhmymbDhedg68";
    const headers = new HttpHeaders({ "x-api-key": api_key, });

    const httpOptions = {
      headers: headers
    };

    try {
      this.data = await lastValueFrom(this.http.get(url, httpOptions));
      console.log('here');
    } catch (error) {
      console.error(error);
    }
  }

}
