import {PluginDocumentation} from '../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../reference';
import {ValGetPlugin} from 'unjquerify/build/src/plugins/attributes/val.get.plugin';

export const ValGetPluginDocumentation: PluginDocumentation = {
  name: 'ValGetPlugin',
  path: ['attributes', 'val.get'],
  plugin: ValGetPlugin,
  references: [
    jqueryApiReference('val'),
    mdnReference('Element/value'),
    youDontNeedJquery('1.8'),
  ],
  fromExample: `$el.val()`,
  toExample: `el.value`,
  description: `Converts $el.val() calls.`,
};
