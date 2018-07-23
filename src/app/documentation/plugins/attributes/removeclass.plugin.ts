import {PluginDocumentation} from '../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../reference';
import {RemoveClassPlugin} from 'unjquerify/build/src/plugins/attributes/removeclass.plugin';

export const RemoveClassPluginDocumentation: PluginDocumentation = {
  name: 'RemoveClassPlugin',
  path: ['attributes', 'removeclass'],
  plugin: RemoveClassPlugin,
  references: [
    jqueryApiReference('removeClass'),
    mdnReference('Element/classList'),
    youDontNeedJquery('2.1'),
  ],
  fromExample: `$el.removeClass("selected")`,
  toExample: `el.classList.remove("selected")`,
  description: `Converts $el.hasClass calls.`,
};
