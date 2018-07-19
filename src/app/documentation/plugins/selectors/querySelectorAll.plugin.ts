import {PluginDocumentation} from '../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../reference';
import {QuerySelectorAllPlugin} from 'unjquerify/build/src/plugins/selectors/querySelectorAll.plugin';

export const QuerySelectorAllPluginDocumentation: PluginDocumentation = {
  name: 'QuerySelectorAllPlugin',
  plugin: QuerySelectorAllPlugin,
  path: ['selectors', 'querySelectorAll'],
  references: [
    jqueryApiReference('jQuery'),
    mdnReference('Document/querySelectorAll'),
    youDontNeedJquery('1.0'),
  ],
  fromExample: `$("<selector>")`,
  toExample: `$(document.querySelectorAll("<selector>"))`,
  description: `Converts $("<selector>") calls.`,
};
