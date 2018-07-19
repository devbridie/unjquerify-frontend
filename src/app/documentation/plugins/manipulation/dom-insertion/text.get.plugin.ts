import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {PluginDocumentation} from '../../plugin-documentation';
import {TextGetPlugin} from 'unjquerify/build/src/plugins/manipulation/dom-insertion/text.get.plugin';

export const TextGetPluginDocumentation: PluginDocumentation = {
  name: 'TextGetPlugin',
  path: ['manipulation', 'dom-insertion', 'text.get'],
  plugin: TextGetPlugin,
  references: [
    jqueryApiReference('text'),
    mdnReference('Node/textContent'),
    youDontNeedJquery('3.2'),
  ],
  fromExample: `$el.text()`,
  toExample: `el.textContent`,
  description: `Converts $el.text() calls.`,
};
