import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UrlRetrieverService {

  constructor(private http: HttpClient) { }

  public getUrlContents(url: string): Observable<string> {
    return this.http.get(url, {
      responseType: 'text'
    });
  }

}
