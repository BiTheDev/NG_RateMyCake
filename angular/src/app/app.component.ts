import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate my Cake ';
  Cakes = {};
  oneCake = {};
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.AllCake();
  }
  AllCake(){
    let cake = this._httpService.getAllCakes();
    cake.subscribe(data =>{
      console.log("Got all Cakes",data);
      this.Cakes = data;
      console.log("Cakes :" + this.Cakes);    
    })
  }
  OneCake(id){
  let one = this._httpService.GetOne(id);
  one.subscribe(data =>{
    console.log("Got one Cake",data);
    this.oneCake = data;
  })
  }
  CreateCake(){

  }
  CreateCmt(){

  }
}
