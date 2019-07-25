import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url:string = 'http://quotes.stormconsultancy.co.uk/random.json';

@Injectable()
export class FirstService {

  constructor(private http: HttpClient) { }

  getQuotes() : Observable<any> {
    return this.http.get(url);
  }

}
