import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) {

   }

   getTodo(){
     return this._http.get("https://jsonplaceholder.typicode.com/todos")
   }
}
