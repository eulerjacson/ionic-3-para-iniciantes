import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  baseApiPath = "https://api.themoviedb.org/3"

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMoovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key="
    + this.getApiKey());
  }

  getApiKey():string{
    return "eee29bbfdfa727f77fcd8ce957d23e1e";
  }

}
