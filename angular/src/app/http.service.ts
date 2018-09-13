import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    
  }
  getAllCakes(){
    return this._http.get("/Cakes/");
  }
  NewCake(cake){
    return this._http.post("/Cakes/new/",cake);
  }
  GetOne(id){
    return this._http.get("/Cakes/show/"+id)
  }
  newComment(cakeid,cmt){
    return this._http.post("/Cakes/comment/new/"+cakeid,cmt);
  }
}
