import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../reference';
import {PluginDocumentation} from '../plugin-documentation';
import {GetElementsByClassNamePlugin} from 'unjquerify/build/src/plugins/selectors/getElementsByClassName.plugin';

export const GetElementsByClassNamePluginDocumentation: PluginDocumentation = {
  name: 'GetElementsByClassNamePlugin',
  plugin: GetElementsByClassNamePlugin,
  path: ['selectors', 'getElementsByClassName'],
  references: [
    jqueryApiReference('jQuery'),
    mdnReference('Document/getElementsByClassName'),
    youDontNeedJquery('1.1'),
  ],
  fromExample: `$(".<class>")`,
  toExample: `$(document.getElementsByClassName("<class>"))`,
  description: `Converts $(".<class>") calls.`,
};
