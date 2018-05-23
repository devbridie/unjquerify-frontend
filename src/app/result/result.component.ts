import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UrlRetrieverService} from '../url-retriever.service';
import {Observable} from 'rxjs';

import {plugins} from 'unjquerify/build/src/all-plugins';
import * as babel from 'babel-standalone';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, AfterViewChecked {

  url = '/assets/examples/simple.txt';
  display: Observable<string>;

  result: Observable<{map: object, code: string}>;

  @ViewChild('code')
  private code: ElementRef;

  constructor(private urlRetriever: UrlRetrieverService) { }

  ngOnInit() {
    this.display = this.urlRetriever.getUrlContents(this.url);
    this.result = this.display.pipe(map(contents => {
      const result = babel.transform(contents, { plugins, sourceMaps: true, ast: false });
      return { map: result.map, code: result.code };
    }));
  }

  ngAfterViewChecked(): void {
    // this.highlightService.highlight(this.code.nativeElement.querySelector('pre'));
  }

}
