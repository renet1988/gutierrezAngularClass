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
  permalink: string = '';

  constructor(private firstService: FirstService) { }

  ngOnInit() {
  }

  getQuotes() {
    return this.firstService.getQuotes()
      .subscribe(data => {
        this.quote = data.quote;
        this.autor = data.author;
        this.permalink = data.permalink;
        return data;
      })
  }

}
