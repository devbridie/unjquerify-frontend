import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SourceSelectComponent } from './frontpage/source-select/source-select.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', component: FrontpageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SourceSelectComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
