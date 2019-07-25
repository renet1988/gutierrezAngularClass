import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './shared/components/first/first.component';
import { EasterComponent } from './shared/components/easter/easter.component';



const routes: Routes = [
  {
    path: 'easter',
    component: EasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
