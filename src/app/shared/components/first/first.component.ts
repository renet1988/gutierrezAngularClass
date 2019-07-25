import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../../services/first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  quote: string = '';
  autor: string = '';
  messageVisible: boolean;
  buttonVisible: boolean;

  constructor(private firstService: FirstService) {
    this.messageVisible = true;
    this.buttonVisible = true;
   }

  ngOnInit() {
  }

  getQuotes() {
    return this.firstService.getQuotes()
      .subscribe(data => {
        this.quote = data.quote;
        this.autor = data.author;
        return data;
      })
  }

  showMessage() {
    this.messageVisible = !this.messageVisible;
  }

  showButton() {
    this.buttonVisible = !this.buttonVisible
  }

}
