import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GutierrezAngularClass';
  componentVisible:boolean;
  
  constructor(){
    this.componentVisible = true;
  }

  showComponent() {
    this.componentVisible = !this.componentVisible;
  }

}
