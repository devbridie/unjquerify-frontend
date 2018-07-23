import {PluginDocumentation} from '../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../reference';
import {ValSetPlugin} from 'unjquerify/build/src/plugins/attributes/val.set.plugin';

export const ValSetPluginDocumentation: PluginDocumentation = {
  name: 'ValSetPlugin',
  path: ['attributes', 'val.set'],
  plugin: ValSetPlugin,
  references: [
    jqueryApiReference('val'),
    mdnReference('Element/value'),
    youDontNeedJquery('1.8'),
  ],
  fromExample: `$el.val("value")`,
  toExample: `el.value = "value"`,
  description: `Converts $el.val(String) calls.`,
};
