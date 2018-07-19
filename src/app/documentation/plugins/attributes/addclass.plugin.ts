import {PluginDocumentation} from '../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../reference';
import {AddClassPlugin} from 'unjquerify/build/src/plugins/attributes/addclass.plugin';

export const AddClassPluginDocumentation: PluginDocumentation = {
  name: 'AddClassPlugin',
  path: ['attributes', 'addclass'],
  plugin: AddClassPlugin,
  references: [
    jqueryApiReference('addClass'),
    mdnReference('Element/classList'),
    youDontNeedJquery('2.1'),
  ],
  fromExample: `$el.addClass("selected")`,
  toExample: `el.classList.add(className)`,
  description: `Converts $el.addClass calls.`,
};
