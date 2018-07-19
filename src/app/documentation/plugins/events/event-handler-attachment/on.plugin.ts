import {jqueryApiReference, mdnReference, youDontNeedJquery} from '../../reference';
import {OnPlugin} from 'unjquerify/build/src/plugins/events/event-handler-attachment/on.plugin';
import {PluginDocumentation} from '../../plugin-documentation';

export const OnPluginDocumentation: PluginDocumentation = {
  name: 'OnPlugin',
  path: ['events', 'event-handler-attachment', 'on'],
  plugin: OnPlugin,
  references: [
    jqueryApiReference('on'),
    mdnReference('EventTarget/addEventListener'),
    youDontNeedJquery('5.1'),
  ],
  fromExample: `$el.on("click", fn)`,
  toExample: `el.addEventListener("click", fn)`,
  description: `Converts on event calls.`,
};
