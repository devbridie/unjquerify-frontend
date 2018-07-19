import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SourceSelectComponent } from './frontpage/source-select/source-select.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ResultComponent } from './result/result.component';
import {UrlRetrieverService} from './url-retriever.service';
import {HttpClientModule} from '@angular/common/http';
import {HighlightModule} from 'ngx-highlightjs';
import { DualPaneComparisonComponent } from './result/dual-pane-comparison/dual-pane-comparison.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DocumentationComponent } from './documentation/documentation.component';
import { PluginDetailsComponent } from './documentation/plugin-details/plugin-details.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {path: 'result/:type', component: ResultComponent},
  {path: 'result/:type/:url', component: ResultComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'documentation/plugin/:name', component: PluginDetailsComponent},
  { path: '', pathMatch: 'full', component: FrontpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SourceSelectComponent,
    FrontpageComponent,
    ResultComponent,
    DualPaneComparisonComponent,
    DocumentationComponent,
    PluginDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    HighlightModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    UrlRetrieverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
