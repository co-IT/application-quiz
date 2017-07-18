import {Http} from '@angular/http';


import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class QuizConfigService {
  config: any;

  constructor(private http: Http) { }

  getConfig() {
    return this.http.get('./assets/config.json')
    .map(response => response.json());
  }
}
