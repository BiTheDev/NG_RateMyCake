import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cake : any;
  Cakes = {};
  click = false;
  oneCake = {};
  comment = {rating: "", content: ""};
  constructor(private _httpService: HttpService) { }
  
  ngOnInit() {
    this.click;
  }
  OneCake(id){
    let one = this._httpService.GetOne(id);
    one.subscribe(data =>{
      console.log("Got one Cake",data);
      this.click =! this.click;
      this.oneCake = data;
    })
    }
  CreateCmt(id){
    let comment = this._httpService.newComment(id,this.comment);
    comment.subscribe(data =>{
      console.log("create comment success",data);
      console.log("");
      this.comment = {rating: "", content: ""}
    })
  }
}
