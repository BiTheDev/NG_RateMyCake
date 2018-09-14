import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() showCake : any;
  average : number;
  constructor() { }

  ngOnInit() {
    this.AverageStar();

  }
  ngOnChanges(){
    this.AverageStar();
  }
  AverageStar(){
    console.log("Rating");
    let length = this.showCake[0].Comment.length
    let totalRate = 0;
    console.log(this.showCake[0].Comment);
    

    console.log(length);

    for(let i = 0; i<length; i++){
      console.log(this.showCake[0].Comment[i].rating);
      totalRate += this.showCake[0].Comment[i].rating;
    }
    
    console.log(totalRate);

    this.average = (totalRate /length);

    console.log(this.average);

  }

}
