import {CssGetPlugin} from 'unjquerify/build/src/plugins/manipulation/style-properties/css.get.plugin';
import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';

export const CssGetPluginDocumentation: PluginDocumentation = {
  name: 'CssGetPlugin',
  path: ['manipulation', 'style-properties', 'css.get'],
  plugin: CssGetPlugin,
  references: [
    jqueryApiReference('css'),
    mdnReference('Window/getComputedStyle'),
    youDontNeedJquery('2.1'),
  ],
  fromExample: `$el.css("background-color")`,
  toExample: `getComputedStyle(el, null)["background-color"]`,
  description: `Converts css get calls.`,
};
