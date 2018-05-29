import {Component, OnInit} from '@angular/core';
import {UrlRetrieverService} from '../url-retriever.service';
import {Observable, Subject} from 'rxjs';

import {plugins} from 'unjquerify/build/src/all-plugins';
import * as babel from 'babel-standalone';
import {map} from 'rxjs/operators';
import {PluginWrapper} from './plugin-wrapper';
import {CodeMutation} from './code-mutation';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  url = '/assets/examples/simple.txt';
  display: Observable<string>;

  result: Observable<{ map: object, code: string }>;

  differences: Subject<CodeMutation[]> = new Subject();

  constructor(private urlRetriever: UrlRetrieverService) {
  }

  ngOnInit() {
    this.display = this.urlRetriever.getUrlContents(this.url);
    this.result = this.display.pipe(map(contents => {
      const wrapper = new PluginWrapper();
      const babelPlugins = plugins.map(p => wrapper.wrapPlugin(p).babel);
      const result = babel.transform(contents, {plugins: babelPlugins, sourceMaps: true, ast: false});
      this.differences.next(wrapper.mutations);
      return {map: result.map, code: result.code};
    }));
  }
}
