import {PluginDocumentation} from '../../plugin-documentation';
import {AttrSetPlugin} from 'unjquerify/build/src/plugins/manipulation/general-attributes/attr.set.plugin';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';

export const AttrSetPluginDocumentation: PluginDocumentation = {
  name: 'AttrSetPlugin',
  plugin: AttrSetPlugin,
  path: ['manipulation', 'general-attributes', 'attr.set'],
  references: [
    jqueryApiReference('attr'),
    mdnReference('Element/setAttribute'),
    youDontNeedJquery('1.11'),
  ],
  fromExample: `$el.attr("foo", "bar")`,
  toExample: `el.setAttribute("foo", "bar")`,
  description: `Converts calls for attribute set.`,
};
