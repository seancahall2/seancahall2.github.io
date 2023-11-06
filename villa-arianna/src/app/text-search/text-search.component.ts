import { Component, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'text-search',
  templateUrl: './text-search.component.html',
  styleUrls: ['./text-search.component.scss']
})
export class TextSearchComponent {
  data: any;
  message: any;
  tag: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private apiService: ApiService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log('params: ', params);
      if (params['tag']) {
        this.searchByTag(params['tag']);
      }
      if (params['searchTerm']) {
        this.doSearch(params['searchTerm']);
      }
      if (params['q']) {
        this.doSearch(params['q']);
      }
    });
  }

  async searchByTag(tag: any) {
    try {
      this.data = await lastValueFrom(this.apiService.searchByTag(tag));
      console.log('here', this.data.data);
      this.tag = tag;
    } catch (error) {
      console.error(error);
    }
  }

  getRoomDetail(obj: any) {
    if (obj.id && obj.id.length > 0) {
      this.router.navigate(['room-detail'], { queryParams: { parentFolder: JSON.stringify(obj) } });
    }
  }

  async testAuth() {
    try {
      this.message = await lastValueFrom(this.apiService.testAuth());
    } catch (error) {
      console.error(error);
    }
  }

  async getFolderItems(id: any) {
    try {
      this.data = await lastValueFrom(this.apiService.getFolderItems(id));
    } catch (error) {
      console.error(error);
    }
  }

  async doSearch(term: string) {
    try {
      this.data = await lastValueFrom(this.apiService.doSearch(term))
      this.tag = term;
    } catch (error) {
      console.error(error);
    }
  }

}
