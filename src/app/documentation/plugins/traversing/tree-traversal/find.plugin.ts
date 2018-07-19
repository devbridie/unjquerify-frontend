import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {FindPlugin} from 'unjquerify/build/src/plugins/traversing/tree-traversal/find.plugin';

export const FindPluginDocumentation: PluginDocumentation = {
  name: 'FindPlugin',
  plugin: FindPlugin,
  path: ['traversing', 'tree-traversal'],
  references: [
    jqueryApiReference('find'),
    mdnReference('Element/querySelectorAll'),
    youDontNeedJquery('1.4'),
  ],
  fromExample: `$el.find(selectorString)`,
  toExample: `el.querySelectorAll(selectorString)`,
  description: `Converts $el.find(string) calls.`,
};
