import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  //private apiUrl = "http://localhost:8080/api/v1";
  private apiUrl = "https://zdravdim.github.io/ita-soccer-league-api";
  private tableData: any;
  private tableDataCached = false;
  
  constructor(private httpClient: HttpClient) {
    this.get('/standings').subscribe( (data) => {
      this.tableData = data;
    });
  }

  get(path: string) {
    return this.httpClient.get(this.apiUrl.concat(path).concat(".json"), {responseType: 'json'}); // .json only for GitHub Pages
  }

  isTableDataCached() {
    return this.tableDataCached;
  }

  getTableData() {
    return this.tableData;
  }

  getTableObservable() {
    return this.get('/standings').pipe(
      map(data => {
        this.tableDataCached = true;
        return this.tableData = data;
      })
    );
  }
}
