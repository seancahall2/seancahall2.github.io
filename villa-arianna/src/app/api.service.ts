import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getMessage() {
        return this.http.get(
            'http://localhost:3000/api/message');
    }

    testAuth() {
        return this.http.get(
            'http://localhost:3000/api/auth'
        );
    }

    getFolderItems() {
        return this.http.get(
            'http://localhost:3000/api/filesByFolder'
        );
    }

    doSearch(searchTerm: string) {
        return this.http.get('http://localhost:3000/api/search', {
            params: { searchTerm: searchTerm },
        }
        );
    }
}