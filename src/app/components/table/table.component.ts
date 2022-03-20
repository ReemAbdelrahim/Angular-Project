import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../model/projects';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @Input() arrprojects:Projects[]=[]
  
  sum:number=0;
  date:Date;
  constructor() { 
    this.date= new Date();
  }

  ngOnInit(): void {
  }
  totalPrice(price:number , inputVal:string){

    this.sum= price* parseInt(inputVal);
     }
}
