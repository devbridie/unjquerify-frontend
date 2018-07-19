import {Reference} from './reference';
import {Plugin} from 'unjquerify/build/src/model/plugin';

export interface PluginDocumentation {
  name: string;
  path: string[];
  plugin: Plugin;
  references: Reference[];
  fromExample: string;
  toExample: string;
  description: string;
}
