import {CssSetPlugin} from 'unjquerify/build/src/plugins/manipulation/style-properties/css.set.plugin';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {PluginDocumentation} from '../../plugin-documentation';

export const CssSetPluginDocumentation: PluginDocumentation = {
  name: 'CssSetPlugin',
  path: ['manipulation', 'style-properties', 'css.set'],

  plugin: CssSetPlugin,
  references: [
    jqueryApiReference('css'),
    mdnReference('HTMLElement/style'),
    youDontNeedJquery('2.1'),
  ],
  fromExample: `$el.css("color", "red")`,
  toExample: `el.style.color = "red"`,
  description: `Converts css set calls.`,
};
