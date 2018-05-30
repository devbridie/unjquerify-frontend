import {Component, OnInit} from '@angular/core';
import {UrlRetrieverService} from '../url-retriever.service';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {plugins} from 'unjquerify/build/src/all-plugins';
import * as babel from 'babel-standalone';
import {map, switchMap} from 'rxjs/operators';
import {PluginWrapper} from './plugin-wrapper';
import {CodeMutation} from './code-mutation';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result$: Observable<{ map: object, code: string }>;
  differences$: Subject<CodeMutation[]> = new BehaviorSubject(null);

  constructor(private urlRetriever: UrlRetrieverService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    const wrapper = new PluginWrapper();
    const babelPlugins = plugins.map(p => wrapper.wrapPlugin(p).babel);
    const code$ = this.route.paramMap.pipe(
      switchMap(route => {
        const inputType = route.get('type');
        if (inputType.toLowerCase() === 'input') {
          return of(localStorage.getItem('input') || '');
        } else if (inputType.toLowerCase() === 'example') {
          const file = route.get('url');
          return this.urlRetriever.getUrlContents('/assets/examples/' + file + '.txt');
        }
      }),
    );
    this.result$ = code$.pipe(map(contents => {
      const result = babel.transform(contents, {plugins: babelPlugins, sourceMaps: true, ast: false});
      this.differences$.next(wrapper.mutations);
      return {map: result.map, code: result.code};
    }));
  }
}
