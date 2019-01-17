import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getSchool() {
     return this.http.get('https://localhost:5001/api/school');
  }
}
