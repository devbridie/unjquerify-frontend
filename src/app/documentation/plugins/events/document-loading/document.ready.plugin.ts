import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {ReadyPlugin} from 'unjquerify/build/src/plugins/events/document-loading/ready.plugin';

export const DocumentReadyPluginDocumentation: PluginDocumentation = {
  name: 'ReadyPlugin',
  path: ['events', 'document-loading', 'ready'],
  plugin: ReadyPlugin,
  references: [
    jqueryApiReference('ready'),
    mdnReference('Events/DOMContentLoaded'),
    youDontNeedJquery('5.0'),
  ],
  fromExample: `$(document).ready(e)`,
  toExample: `if (document.readyState !== 'loading') {
    e();
} else {
    document.addEventListener('DOMContentLoaded', e);
}`,
  description: 'Converts $(document).ready calls.',
};
