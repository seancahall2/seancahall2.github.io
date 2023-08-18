import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval, take, lastValueFrom } from 'rxjs';

@Component({
  selector: 'text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.scss']
})
export class TextSearchComponent {
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
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
