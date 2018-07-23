import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {ContentsPlugin} from 'unjquerify/build/src/plugins/traversing/miscellaneous-traversing/contents.plugin';

export const ContentsPluginDocumentation: PluginDocumentation = {
  name: 'ContentsPlugin',
  plugin: ContentsPlugin,
  path: ['traversing', 'miscellaneous-traversing'],
  references: [
    jqueryApiReference('contents'),
    mdnReference('Element/childNodes'),
    youDontNeedJquery('1.9'),
  ],
  fromExample: `$el.contents()`,
  toExample: `el.childNodes`,
  description: `Converts $el.contents() calls.`,
};
