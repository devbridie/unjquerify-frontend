import {PluginDocumentation} from './plugin-documentation';
import {AddClassPluginDocumentation} from './attributes/addclass.plugin';
import {HidePluginDocumentation} from './effects/basics/hide.plugin';
import {DocumentReadyPluginDocumentation} from './events/document-loading/document.ready.plugin';
import {OnPluginDocumentation} from './events/event-handler-attachment/on.plugin';
import {ClickAttachPluginDocumentation} from './events/mouse-events/click.attach.plugin';
import {HtmlGetPluginDocumentation} from './manipulation/dom-insertion/html.get.plugin';
import {HtmlSetPluginDocumentation} from './manipulation/dom-insertion/html.set.plugin';
import {TextGetPluginDocumentation} from './manipulation/dom-insertion/text.get.plugin';
import {TextSetPluginDocumentation} from './manipulation/dom-insertion/text.set.plugin';
import {EmptyPluginDocumentation} from './manipulation/dom-removal/empty.plugin';
import {RemovePluginDocumentation} from './manipulation/dom-removal/remove.plugin';
import {AttrSetPluginDocumentation} from './manipulation/general-attributes/attr.set.plugin';
import {AttrGetPluginDocumentation} from './manipulation/general-attributes/attr.get.plugin';
import {CssGetPluginDocumentation} from './manipulation/style-properties/css.get.plugin';
import {CssSetPluginDocumentation} from './manipulation/style-properties/css.set.plugin';
import {GetElementsByClassNamePluginDocumentation} from './selectors/getElementsByClassName.plugin';
import {QuerySelectorAllPluginDocumentation} from './selectors/querySelectorAll.plugin';
import {IsPluginDocumentation} from './traversing/filtering/is.plugin';
import {FindPluginDocumentation} from './traversing/tree-traversal/find.plugin';
import {HasClassPluginDocumentation} from './attributes/hasclass.plugin';
import {RemoveClassPluginDocumentation} from './attributes/removeclass.plugin';
import {ToggleClassPluginDocumentation} from './attributes/toggleclass.plugin';
import {ValGetPluginDocumentation} from './attributes/val.get.plugin';
import {ValSetPluginDocumentation} from './attributes/val.set.plugin';
import {HeightGetPluginDocumentation} from './dimensions/height.get.plugin';
import {ContentsPluginDocumentation} from './traversing/miscellaneous-traversing/contents.plugin';
import {NextPluginDocumentation} from './traversing/tree-traversal/next.plugin';
import {PrevPluginDocumentation} from './traversing/tree-traversal/prev.plugin';
import {SiblingsPluginDocumentation} from './traversing/tree-traversal/siblings.plugin';

export const allDocumentation: PluginDocumentation[] = [
  AddClassPluginDocumentation,
  HidePluginDocumentation,
  DocumentReadyPluginDocumentation,
  OnPluginDocumentation,
  ClickAttachPluginDocumentation,
  HtmlGetPluginDocumentation,
  HtmlSetPluginDocumentation,
  TextGetPluginDocumentation,
  TextSetPluginDocumentation,
  EmptyPluginDocumentation,
  RemovePluginDocumentation,
  AttrSetPluginDocumentation,
  AttrGetPluginDocumentation,
  CssGetPluginDocumentation,
  CssSetPluginDocumentation,
  GetElementsByClassNamePluginDocumentation,
  QuerySelectorAllPluginDocumentation,
  IsPluginDocumentation,
  FindPluginDocumentation,
  HasClassPluginDocumentation,
  RemoveClassPluginDocumentation,
  ToggleClassPluginDocumentation,
  ValGetPluginDocumentation,
  ValSetPluginDocumentation,
  HeightGetPluginDocumentation,
  ContentsPluginDocumentation,
  NextPluginDocumentation,
  PrevPluginDocumentation,
  SiblingsPluginDocumentation,
];
