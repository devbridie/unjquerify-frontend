import {Component, OnInit} from '@angular/core';
import {Plugin} from 'unjquerify/build/src/model/plugin';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {debounce, debounceTime, filter, map, switchMap} from 'rxjs/operators';
import {plugins} from 'unjquerify/build/src/all-plugins';
import {UrlRetrieverService} from '../../url-retriever.service';
import * as babel from 'babel-standalone';

@Component({
  selector: 'app-plugin-details',
  templateUrl: './plugin-details.component.html',
  styleUrls: ['./plugin-details.component.scss']
})
export class PluginDetailsComponent implements OnInit {
  plugin$: Observable<Plugin> = this.route.params.pipe(
    map(params => params.name as string),
    map(name => plugins.find(plugin => plugin.name === name))
  );

  path$: Observable<string> = this.plugin$.pipe(
    map((plugin: Plugin) => plugin.path),
    map((path: string[]) => path.join('/')),
    map((path: string) => 'src/plugins/' + path + '.plugin.ts')
  );

  source$: Observable<string> = this.path$.pipe(
    switchMap((path: string) => this.urlRetrieverService.getUrlContents('/assets/unjquerify-source/' + path))
  );

  example$ = new BehaviorSubject('');
  exampleOutput$: Observable<string> = combineLatest(this.plugin$, this.example$).pipe(
    filter(([plugin, example]) => !!(plugin && example)),
    map(([plugin, example]) => {
      try {
        const result = babel.transform(example, {plugins: [plugin.babel], sourceMaps: false, ast: false});
        return result.code;
      } catch (e) {
        return e.toString();
      }
    })
  );

  constructor(private route: ActivatedRoute, private urlRetrieverService: UrlRetrieverService) {
  }

  ngOnInit() {
    this.plugin$.subscribe((plugin: Plugin) => {
      this.example$.next(plugin.fromExample);
    });
  }

}
