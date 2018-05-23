import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SourceSelectComponent } from './frontpage/source-select/source-select.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ResultComponent } from './result/result.component';
import {UrlRetrieverService} from './url-retriever.service';
import {HttpClientModule} from '@angular/common/http';
import {HighlightModule} from 'ngx-highlightjs';
import { DualPaneComparisonComponent } from './result/dual-pane-comparison/dual-pane-comparison.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {path: 'result/:type/:url', component: ResultComponent},
  { path: '', pathMatch: 'full', component: FrontpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SourceSelectComponent,
    FrontpageComponent,
    ResultComponent,
    DualPaneComparisonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    HighlightModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [
    UrlRetrieverService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
