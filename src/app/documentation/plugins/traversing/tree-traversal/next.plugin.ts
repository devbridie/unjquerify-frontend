import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {NextPlugin} from 'unjquerify/build/src/plugins/traversing/tree-traversal/next.plugin';

export const NextPluginDocumentation: PluginDocumentation = {
  name: 'NextPlugin',
  plugin: NextPlugin,
  path: ['traversing', 'tree-traversal'],
  references: [
    jqueryApiReference('next'),
    mdnReference('Element/nextElementSibling'),
    mdnReference('Element/matches'),
    youDontNeedJquery('1.4'),
  ],
  fromExample: `$el.next()`,
  toExample: `el.nextElementSibling`,
  description: `Converts $el.next(String | undefined) calls.`,
};
