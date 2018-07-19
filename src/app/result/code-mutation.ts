import {PluginDocumentation} from '../documentation/plugins/plugin-documentation';

export interface CodeMutation {
  docs: PluginDocumentation;
  from: string;
  to: string;
}
