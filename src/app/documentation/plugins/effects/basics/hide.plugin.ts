import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {HidePlugin} from 'unjquerify/build/src/plugins/effects/basics/hide.plugin';

export const HidePluginDocumentation: PluginDocumentation = {
  name: 'HidePlugin',
  path: ['effects', 'basics', 'hide'],
  plugin: HidePlugin,
  references: [
    jqueryApiReference('hide'),
    mdnReference('HTMLElement/style'),
    youDontNeedJquery('8.1'),
  ],
  fromExample: `$el.hide()`,
  toExample: `el.style.display = "none"`,
  description: `Converts $el.hide() calls.`,
};
