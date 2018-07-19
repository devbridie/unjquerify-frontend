import {callExpression, Expression, identifier, memberExpression, program} from 'babel-types';
import generate from 'babel-generator';
import {Scope} from 'babel-traverse';
import {Plugin} from 'unjquerify/build/src/model/plugin';
import {CodeMutation} from './code-mutation';
import {CallExpressionOfjQueryCollection} from 'unjquerify/build/src/model/matchers/call-expression-of-jquery-collection';
import {PluginDocumentation} from '../documentation/plugins/plugin-documentation';
import {CallExpressionOfjQueryGlobal} from 'unjquerify/build/src/model/matchers/call-expression-of-jquery-global';

export class PluginWrapper {
  constructor(public mutations: CodeMutation[] = []) {
  }

  /**
   * Wraps a plugin to listen for AST changes.
   */
  wrapPlugin(docs: PluginDocumentation, plugin: Plugin): Plugin {
    const copy = Object.assign({}, plugin);
    const original = plugin.replaceWith;
    copy.replaceWith = (element: Expression, args: Expression[], scope: Scope) => {
      const out = original(element, args, scope);
      let fromAst: Expression;
      if (plugin.matchesExpressionType instanceof CallExpressionOfjQueryCollection) {
        const name = plugin.matchesExpressionType.methodName;
        fromAst = callExpression(memberExpression(element, identifier(name)), args);
      } else if (plugin.matchesExpressionType instanceof CallExpressionOfjQueryGlobal) {
        fromAst = callExpression(identifier('$'), args);
      }
      let outCode;
      if (Array.isArray(out)) {
        outCode = generate(program(out)).code;
      } else {
        outCode = generate(out).code;
      }
      this.mutations.push({
        docs: docs,
        from: generate(fromAst).code,
        to: outCode
      });
      return out;
    };
    return copy;
  }
}
