import {PluginDocumentation} from '../../plugin-documentation';
import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {ClickAttachPlugin} from 'unjquerify/build/src/plugins/events/mouse-events/click.attach.plugin';

export const ClickAttachPluginDocumentation: PluginDocumentation = {
  name: 'ClickAttachPlugin',
  path: ['events', 'mouse-events', 'click.attach'],
  plugin: ClickAttachPlugin,
  references: [
    jqueryApiReference('click'),
    mdnReference('EventTarget/addEventListener'),
    youDontNeedJquery('5.1'),
  ],
  fromExample: `$el.click(fn)`,
  toExample: `el.addEventListener("click", fn)`,
  description: `Converts on click calls.`,
};
