import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate my Cake';
  Cakes = {};
  oneCake = {};
  click = false;
  cmtbtn = false;
  target = 0;
  newCake = {name : "", image : ""};
  comment = {rating: "", content: ""};
  constructor(private _httpService: HttpService){
  }
  ngOnInit(){
    this.AllCake();
    this.newCake;
    this.click;
  }
  AllCake(){
    let cake = this._httpService.getAllCakes();
    cake.subscribe(data =>{
      console.log("Got all Cakes",data);
      this.Cakes = data;
      console.log("Cakes :" + this.Cakes);    
    })
  }
  commentbox(id){
    this.cmtbtn = true;
    this.target = id;
  }
  OneCake(id){
  let one = this._httpService.GetOne(id);
  one.subscribe(data =>{
    console.log("Got one Cake",data);
    this.click = true;
    this.oneCake = data;
  })
  }
  CreateCake(){
    let cake = this._httpService.NewCake(this.newCake);
    cake.subscribe(data =>{
      console.log("create cake success",data);
      console.log("");
      this.newCake = {name : "", image : ""};
      this.AllCake();
    })
  }
  CreateCmt(id){
    let comment = this._httpService.newComment(id,this.comment);
    comment.subscribe(data =>{
      console.log("create comment success",data);
      console.log("");
      this.comment = {rating: "", content: ""}
      this.AllCake();
    })
  }
}
