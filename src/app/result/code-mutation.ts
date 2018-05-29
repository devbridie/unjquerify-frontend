import {Plugin} from 'unjquerify/build/src/model/plugin';

export interface CodeMutation {
  plugin: Plugin;
  from: string;
  to: string;
}
