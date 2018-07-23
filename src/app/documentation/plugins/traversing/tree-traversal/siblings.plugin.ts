import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {SiblingsPlugin} from 'unjquerify/build/src/plugins/traversing/tree-traversal/siblings.plugin';

export const SiblingsPluginDocumentation: PluginDocumentation = {
  name: 'SiblingsPlugin',
  plugin: SiblingsPlugin,
  path: ['traversing', 'tree-traversal'],
  references: [
    jqueryApiReference('siblings'),
    mdnReference('Element/parentNode'),
    mdnReference('ParentNode/children'),
    youDontNeedJquery('1.4'),
  ],
  fromExample: `$el.siblings()`,
  toExample: `[...el.parentNode.children].filter(e => e !== el)`,
  description: `Converts $el.sibings(selector?) calls.`,
};
