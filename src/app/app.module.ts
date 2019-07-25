import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './shared/components/first/first.component';
import { FirstService } from './services/first.service';
import { FirstDirective } from './shared/directives/first.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [
    FirstService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
