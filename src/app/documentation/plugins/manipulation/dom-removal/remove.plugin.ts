import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {PluginDocumentation} from '../../plugin-documentation';
import {RemovePlugin} from 'unjquerify/build/src/plugins/manipulation/dom-removal/remove.plugin';

export const RemovePluginDocumentation: PluginDocumentation = {
  name: 'RemovePlugin',
  plugin: RemovePlugin,
  path: ['manipulation', 'dom-removal', 'remove'],
  references: [
    jqueryApiReference('remove'),
    mdnReference('Node/removeChild'),
    youDontNeedJquery('3.1'),
  ],
  fromExample: `$el.remove()`,
  toExample: `el.parentNode.removeChild(el)`,
  description: `Converts $el.remove() calls.`,
};
