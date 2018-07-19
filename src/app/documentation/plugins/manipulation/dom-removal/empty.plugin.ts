import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {EmptyPlugin} from 'unjquerify/build/src/plugins/manipulation/dom-removal/empty.plugin';

export const EmptyPluginDocumentation: PluginDocumentation = {
  name: 'EmptyPlugin',
  plugin: EmptyPlugin,
  path: ['manipulation', 'dom-removal', 'empty'],
  references: [
    jqueryApiReference('empty'),
    mdnReference('Element/innerHTML'),
    youDontNeedJquery('3.10'),
  ],
  fromExample: `$el.empty()`,
  toExample: `el.innerHTML = ''`,
  description: `Converts $el.empty() calls.`,
};
