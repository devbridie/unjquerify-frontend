import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {IsPlugin} from 'unjquerify/build/src/plugins/traversing/filtering/is.plugin';

export const IsPluginDocumentation: PluginDocumentation = {
  name: 'IsPlugin',
  plugin: IsPlugin,
  path: ['traversing', 'filtering'],
  references: [
    jqueryApiReference('is'),
    mdnReference('Element/matches'),
    youDontNeedJquery('3.8'),
  ],
  fromExample: `$el.is(selectorString)`,
  toExample: `el.matches(selectorString)`,
  description: `Converts $el.is(string) calls.`,
};
