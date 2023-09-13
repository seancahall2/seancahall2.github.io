import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getMessage() {

        return this.http.get(
            // 'http://localhost:3000/api/message'
            'https://va-nodejs-api.up.railway.app/api/message'
        );
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

    doJSON() {
        return this.http.get(
            'http://localhost:3000/api/dojson'
        );
    }

    writeJson(tag: string, count: number) {
        return this.http.get(
            'http://localhost:3000/api/writeJson', {
            params: { tag: tag, count: count.toString() },
        }
        );
    }

    doSearch(searchTerm: string) {
        const localUrl = 'http://localhost:3000/api/search';
        const url = 'https://va-nodejs-api.up.railway.app/api/search';
        return this.http.get(url, {
            params: { searchTerm: searchTerm },
        }
        );
    }

    searchByTag(tag: string) {
        const localUrl = 'http://localhost:3000/api/searchByTag';
        const url = 'https://va-nodejs-api.up.railway.app/api/searchByTag';
        return this.http.get(url, {
            params: { tag: tag },
        }
        );
    }


    getFileInfo(id: string) {
        console.log('id: ' + id);
        return this.http.get('http://localhost:3000/api/getFileInfo', {
            params: { id: id },
        }
        );
    }

}