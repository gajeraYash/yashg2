import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SelfintroComponent } from './selfintro/selfintro.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SelfintroComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
