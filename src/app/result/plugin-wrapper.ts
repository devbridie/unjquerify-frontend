import {Node} from 'babel-types';
import generate from 'babel-generator';
import {NodePath, Visitor} from 'babel-traverse';
import {Plugin} from 'unjquerify/build/src/model/plugin';
import {CodeMutation} from './code-mutation';

export class PluginWrapper {
  constructor(public mutations: CodeMutation[] = []) {
  }

  private wrapTransformer(plugin: Plugin, original: (path: NodePath) => void): (path: NodePath) => void {
    return (path: NodePath) => {
      const originalCode = generate(path.node).code;
      original(path);
      try { // try catch needed here because some transformations can kill path.node (by replacing its parent)
        const afterCode = generate(path.node).code;
        if (originalCode !== afterCode) {
          this.mutations.push({plugin: plugin, from: originalCode, to: afterCode});
        }
      } catch (e) {
      }
    };
  }

  private wrapVisitor(plugin: Plugin, visitor: Visitor<Node>): Visitor<Node> {
    const newVisitor = {};
    const names = Object.keys(visitor);

    for (const name of names) {
      const original = visitor[name];
      if (original instanceof Function) {
        newVisitor[name] = this.wrapTransformer(plugin, original);
      } else {
        const newInner = {};
        const innerNames = Object.keys(original);
        for (const innerName of innerNames) {
          newInner[innerName] = this.wrapTransformer(plugin, original[innerName]);
        }
        newVisitor[name] = newInner;
      }
    }
    return newVisitor as Visitor<Node>;
  }

  /**
   * Wraps a plugin to listen for AST changes.
   */
  wrapPlugin(plugin: Plugin): Plugin {
    return {
      toExample: plugin.toExample,
      path: plugin.path,
      fromExample: plugin.fromExample,
      name: plugin.name,
      description: plugin.description,
      references: plugin.references,
      babel: () => ({
        visitor: this.wrapVisitor(plugin, plugin.babel().visitor)
      })
    };
  }
}
