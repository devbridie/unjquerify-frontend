import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {PrevPlugin} from 'unjquerify/build/src/plugins/traversing/tree-traversal/prev.plugin';

export const PrevPluginDocumentation: PluginDocumentation = {
  name: 'PrevPlugin',
  plugin: PrevPlugin,
  path: ['traversing', 'tree-traversal'],
  references: [
    jqueryApiReference('prev'),
    mdnReference('Element/previousElementSibling'),
    mdnReference('Element/matches'),
    youDontNeedJquery('1.4'),
  ],
  fromExample: `$el.prev()`,
  toExample: `el.previousElementSibling`,
  description: `Converts $el.prev(String | undefined) calls.`,
};
