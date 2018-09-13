import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() showCake : any;
  totalRate = 0;
  length = 0;
  average = 0;
  constructor() { }

  ngOnInit() {
    this.AverageStar();
  }
  AverageStar(){
    console.log("Rating");
    console.log(this.showCake[0].Comment);
    
    this.length = this.showCake[0].Comment.length;

    console.log(this.length);

    for(let i = 0; i<this.length; i++){
      console.log(this.showCake[0].Comment[i].rating);
      
      this.totalRate += this.showCake[0].Comment[i].rating;
    }
    
    console.log(this.totalRate);

    this.average = this.totalRate /this.length;

    console.log(this.average);
    
  }

}
