import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {HtmlSetPlugin} from 'unjquerify/build/src/plugins/manipulation/dom-insertion/html.set.plugin';
import {PluginDocumentation} from '../../plugin-documentation';

export const HtmlSetPluginDocumentation: PluginDocumentation = {
  name: 'HtmlSetPlugin',
  plugin: HtmlSetPlugin,
  path: ['manipulation', 'dom-insertion', 'html.set'],
  references: [
    jqueryApiReference('html'),
    mdnReference('Element/innerHTML'),
    youDontNeedJquery('3.3'),
  ],
  fromExample: `$el.html("abc")`,
  toExample: `el.innerHTML = "abc"`,
  description: `Converts $el.html(...) calls.`,
};
