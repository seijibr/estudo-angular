import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  private readonly URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  get(endipoint: string) {
    return this.http.get(`${this.URL}/${endipoint}`);
  }

  post(endipoint: string) {

  }

  put(endipoint: string) {

  }

  delete(endipoint: string) {

  }
}
