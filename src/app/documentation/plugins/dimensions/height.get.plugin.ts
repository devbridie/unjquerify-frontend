import {PluginDocumentation} from '../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../reference';
import {HeightGetPlugin} from 'unjquerify/build/src/plugins/dimensions/height.get.plugin';

export const HeightGetPluginDocumentation: PluginDocumentation = {
  name: 'HeightGetPlugin',
  path: ['dimensions', 'height.get'],
  plugin: HeightGetPlugin,
  references: [
    jqueryApiReference('height'),
    mdnReference('Element/clientHeight'),
    youDontNeedJquery('2.2'),
  ],
  fromExample: `const height = $el.height()`,
  toExample: `el.clientHeight`,
  description: `Converts $el.height() calls.`,
};
