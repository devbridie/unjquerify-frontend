import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {UrlRetrieverService} from '../../url-retriever.service';
import * as babel from 'babel-standalone';
import {PluginDocumentation} from '../plugins/plugin-documentation';
import {allDocumentation} from '../plugins/all-documentation';
import {jQueryExpressionPlugin} from 'unjquerify/build/src/plugins/jquery-expression.plugin';

@Component({
  selector: 'app-plugin-details',
  templateUrl: './plugin-details.component.html',
  styleUrls: ['./plugin-details.component.scss']
})
export class PluginDetailsComponent implements OnInit {
  pluginDocumentation$: Observable<PluginDocumentation> = this.route.params.pipe(
    map(params => params.name as string),
    map(name => allDocumentation.find(plugin => plugin.name === name))
  );

  path$: Observable<string> = this.pluginDocumentation$.pipe(
    map((pluginDocumentation: PluginDocumentation) => pluginDocumentation.path),
    map((path: string[]) => path.join('/')),
    map((path: string) => 'src/plugins/' + path + '.plugin.ts')
  );

  source$: Observable<string> = this.path$.pipe(
    switchMap((path: string) => this.urlRetrieverService.getUrlContents('/assets/unjquerify-source/' + path))
  );

  example$ = new BehaviorSubject('');
  exampleOutput$: Observable<string> = combineLatest(this.pluginDocumentation$, this.example$).pipe(
    filter(([doc, example]) => !!(doc && example)),
    map(([doc, example]) => {
      try {
        const result = babel.transform(example, {plugins: [jQueryExpressionPlugin([doc.plugin])], sourceMaps: false, ast: false});
        return result.code;
      } catch (e) {
        return e.toString();
      }
    })
  );

  constructor(private route: ActivatedRoute, private urlRetrieverService: UrlRetrieverService) {
  }

  ngOnInit() {
    this.pluginDocumentation$.subscribe((doc: PluginDocumentation) => {
      this.example$.next(doc.fromExample);
    });
  }

}
