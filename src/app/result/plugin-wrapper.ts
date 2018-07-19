import {blockStatement, callExpression, Expression, identifier, memberExpression} from 'babel-types';
import generate from 'babel-generator';
import {Scope} from 'babel-traverse';
import {Plugin} from 'unjquerify/build/src/model/plugin';
import {CodeMutation} from './code-mutation';
import {CallExpressionOfjQueryCollection} from 'unjquerify/build/src/model/matchers/call-expression-of-jquery-collection';

export class PluginWrapper {
  constructor(public mutations: CodeMutation[] = []) {
  }

  /**
   * Wraps a plugin to listen for AST changes.
   */
  wrapPlugin(plugin: Plugin): Plugin {
    const copy = Object.assign({}, plugin);
    const original = plugin.replaceWith;
    copy.replaceWith = (element: Expression, args: Expression[], scope: Scope) => {
      const out = original(element, args, scope);
      if (plugin.matchesExpressionType instanceof CallExpressionOfjQueryCollection) {
        const name = plugin.matchesExpressionType.methodName;
        const fromAst = callExpression(memberExpression(element, identifier(name)), args);
        let outCode;
        if (Array.isArray(out)) {
          outCode = generate(blockStatement(out)).code;
        } else {
          outCode = generate(out).code;
        }
        this.mutations.push({
          plugin: plugin,
          from: generate(fromAst).code,
          to: outCode
        });
        console.log(this.mutations);
      }
      return out;
    };
    return copy;
  }
}
