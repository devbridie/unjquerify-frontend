import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {AttrGetPlugin} from 'unjquerify/build/src/plugins/manipulation/general-attributes/attr.get.plugin';

export const AttrGetPluginDocumentation: PluginDocumentation = {
  name: 'AttrGetPlugin',
  plugin: AttrGetPlugin,
  path: ['manipulation', 'general-attributes', 'attr.get'],
  references: [
    jqueryApiReference('attr'),
    mdnReference('Element/getAttribute'),
    youDontNeedJquery('1.11'),
  ],
  fromExample: `$el.attr("foo")`,
  toExample: `el.getAttribute("foo")`,
  description: `Converts calls for attribute get.`,
};
