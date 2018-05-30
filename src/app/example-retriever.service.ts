import { Injectable } from '@angular/core';
import {UrlRetrieverService} from './url-retriever.service';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ExampleRetrieverService {

  constructor(private urlRetriever: UrlRetrieverService) { }

  public getExample(name: string): Observable<string> {
    return this.urlRetriever.getUrlContents('/assets/examples/' + name + '.txt');
  }
}
