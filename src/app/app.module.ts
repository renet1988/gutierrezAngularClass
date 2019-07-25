import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './shared/components/first/first.component';
import { SecondComponent } from './shared/components/second/second.component';
import { ThirdComponent } from './shared/components/third/third.component';
import { FourthComponent } from './shared/components/fourth/fourth.component';
import { FifthComponent } from './shared/components/fifth/fifth.component';
import { FirstService } from './services/first.service';
import { FirstDirective } from './shared/directives/first.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
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
