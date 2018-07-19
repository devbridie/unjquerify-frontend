import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {TextSetPlugin} from 'unjquerify/build/src/plugins/manipulation/dom-insertion/text.set.plugin';

export const TextSetPluginDocumentation: PluginDocumentation = {
  name: 'TextSetPlugin',
  plugin: TextSetPlugin,
  path: ['manipulation', 'dom-insertion', 'text.set'],
  references: [
    jqueryApiReference('text'),
    mdnReference('Node/textContent'),
    youDontNeedJquery('3.2'),
  ],
  fromExample: `$el.text("new text")`,
  toExample: `el.textContent = "new text"`,
  description: `Converts $el.text(...) calls.`,
};
