import {PluginDocumentation} from '../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../reference';
import {HasClassPlugin} from 'unjquerify/build/src/plugins/attributes/hasclass.plugin';

export const HasClassPluginDocumentation: PluginDocumentation = {
  name: 'HasClassPlugin',
  path: ['attributes', 'hasclass'],
  plugin: HasClassPlugin,
  references: [
    jqueryApiReference('hasClass'),
    mdnReference('Element/classList'),
    youDontNeedJquery('2.1'),
  ],
  fromExample: `$el.hasClass("selected")`,
  toExample: `el.classList.contains("selected")`,
  description: `Converts $el.hasClass calls.`,
};
