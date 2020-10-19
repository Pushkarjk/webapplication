import { Component, OnInit } from '@angular/core';

export class Travel {
  public major: string;
}

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent implements OnInit {

  numPpl:number = 0;
  price:number = 0;
  numOfTravelers:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  Cities: string[] = ['Chicago','New York','San Francisco'];



  public Calc(): void {
    // price = this.numPple * 150;

    this.price =  150;
    console.log(this.price);
  }


  public addToList(): void {

      console.log(this.numOfTravelers);
      this.price = this.numOfTravelers * 150;
  }


}
