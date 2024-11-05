import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDataList() {
    return this.http.get('https://dummy-json.mock.beeceptor.com/posts');
  }
}
