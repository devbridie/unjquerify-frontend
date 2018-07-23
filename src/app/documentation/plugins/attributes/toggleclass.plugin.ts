import {PluginDocumentation} from '../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../reference';
import {ToggleClassPlugin} from 'unjquerify/build/src/plugins/attributes/toggleclass.plugin';

export const ToggleClassPluginDocumentation: PluginDocumentation = {
  name: 'ToggleClassPlugin',
  path: ['attributes', 'toggleclass'],
  plugin: ToggleClassPlugin,
  references: [
    jqueryApiReference('toggleClass'),
    mdnReference('Element/classList'),
    youDontNeedJquery('2.1'),
  ],
  fromExample: `$el.toggleClass("selected")`,
  toExample: `el.classList.toggle("selected")`,
  description: `Converts $el.toggleClass calls.`,
};
