import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {HtmlGetPlugin} from 'unjquerify/build/src/plugins/manipulation/dom-insertion/html.get.plugin';

export const HtmlGetPluginDocumentation: PluginDocumentation = {
  name: 'HtmlGetPlugin',
  plugin: HtmlGetPlugin,
  path: ['manipulation', 'dom-insertion', 'html.get'],
  references: [
    jqueryApiReference('html'),
    mdnReference('Element/innerHTML'),
    youDontNeedJquery('3.3'),
  ],
  fromExample: `$el.html()`,
  toExample: `el.innerHTML`,
  description: `Converts $el.html() calls.`,
};
