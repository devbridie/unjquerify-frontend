import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';

import {plugins} from 'unjquerify/build/src/all-plugins';
import * as babel from 'babel-standalone';
import {map, switchMap} from 'rxjs/operators';
import {PluginWrapper} from './plugin-wrapper';
import {ActivatedRoute} from '@angular/router';
import {ExampleRetrieverService} from '../example-retriever.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  wrapper = new PluginWrapper();
  babelPlugins = plugins.map(p => this.wrapper.wrapPlugin(p).babel);

  code$ = this.route.paramMap.pipe(
    switchMap(route => {
      const inputType = route.get('type');
      if (inputType.toLowerCase() === 'input') {
        return of(localStorage.getItem('input') || '');
      } else if (inputType.toLowerCase() === 'example') {
        const file = route.get('url');
        return this.exampleRetriever.getExample(file);
      }
    }),
  );

  result$ = this.code$.pipe(map(code => {
    const result = babel.transform(code, {plugins: this.babelPlugins, sourceMaps: true, ast: false});
    return {map: result.map, code: result.code};
  }));

  differences$ = this.result$.pipe(switchMap(() => of(this.wrapper.mutations)));

  constructor(private exampleRetriever: ExampleRetrieverService,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }
}
