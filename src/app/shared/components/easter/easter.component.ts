import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easter',
  templateUrl: './easter.component.html',
  styleUrls: ['./easter.component.css']
})
export class EasterComponent implements OnInit {
  easter:string;
  constructor() { 
    this.easter = "You found easter egg";
  }

  ngOnInit() {
  }

  foundEaster () {
    alert(this.easter);
  }

}
