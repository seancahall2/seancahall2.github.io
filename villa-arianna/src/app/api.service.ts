import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    removeTag(tag: any, fileId: any) {
        console.log("api call to remove tag: ", tag, fileId);
        return this.http.get(environment.localApi.url + '/removeTag',
            {
                params: { tag: tag, id: fileId },
            }
        );
    }

    getMessage() {

        return this.http.get(
            // environment.localApi.url + '/message'
            environment.api.url + '/message'
        );
    }

    testAuth() {
        return this.http.get(
            environment.localApi.url + '/auth'
        );
    }

    getFolderItems(id: any) {
        const url = environment.api.url + '/filesByFolder';
        const localUrl = environment.localApi.url + '/filesByFolder';
        return this.http.get(
            url, {
            params: { id: id },
        }
        );
    }

    doJSON() {
        return this.http.get(
            environment.localApi.url + '/dojson'
        );
    }

    writeJson(tag: string, count: number) {
        return this.http.get(
            environment.localApi.url + '/writeJson', {
            params: { tag: tag, count: count.toString() },
        }
        );
    }

    doSearch(searchTerm: string) {
        const localUrl = environment.localApi.url + '/search';
        const url = environment.api.url + '/search';
        return this.http.get(url, {
            params: { searchTerm: searchTerm },
        }
        );
    }

    searchByTag(tag: string) {
        const localUrl = environment.localApi.url + '/searchByTag';
        const url = environment.api.url + '/searchByTag';
        return this.http.get(url, {
            params: { tag: tag },
        }
        );
    }

    getFileInfo(id: string) {
        console.log('id: ' + id);
        return this.http.get(environment.api.url + '/getFileInfo', {
            params: { id: id },
        }
        );
    }

}