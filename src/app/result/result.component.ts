import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import * as babel from 'babel-standalone';
import {distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {PluginWrapper} from './plugin-wrapper';
import {ActivatedRoute} from '@angular/router';
import {ExampleRetrieverService} from '../example-retriever.service';
import {jQueryExpressionPlugin} from 'unjquerify/build/src/plugins/jquery-expression.plugin';
import {allDocumentation} from '../documentation/plugins/all-documentation';
import {CodeMutation} from './code-mutation';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  wrapper = new PluginWrapper();
  babelPlugins = allDocumentation.map(d => this.wrapper.wrapPlugin(d, d.plugin));

  code$ = this.route.paramMap.pipe(
    map(route => [route.get('type'), route.get('url')]),
    distinctUntilChanged((a, b) => a !== b, null),
    switchMap(([inputType, url]: [string, string]) => {
      if (inputType.toLowerCase() === 'input') {
        return of(localStorage.getItem('input') || '');
      } else if (inputType.toLowerCase() === 'example') {
        return this.exampleRetriever.getExample(url);
      }
    })
  );

  differences$ = new BehaviorSubject<CodeMutation[]>(null);

  result$ = this.code$.pipe(map(code => {
    const result = babel.transform(code, {plugins: [jQueryExpressionPlugin(this.babelPlugins)], sourceMaps: true, ast: false});
    this.differences$.next(this.wrapper.mutations);
    console.log(this.wrapper.mutations);
    return {map: result.map, code: result.code};
  }));

  constructor(private exampleRetriever: ExampleRetrieverService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }
}
