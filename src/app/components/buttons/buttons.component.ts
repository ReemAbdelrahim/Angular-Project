import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Projects } from '../model/projects';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() ourevent = new EventEmitter();

  arrprojects:Projects[]=[]


  arrweb:Projects[]=[
    
{id:1,title:"Online Shopping",imagrUrl:"assets/web/cart2.jpg",price:3000,status:"Available"},
{id:2,title:"Medical",imagrUrl:"assets/web/med.png",price:4000,status:"Available"},
{id:3,title:"Financial",imagrUrl:"assets/web/fin.png",price:5000,status:"Available"},
{id:4,title:"Politics",imagrUrl:"assets/web/pol.jpg",price:1500,status:"Available"},
{id:5,title:"Educational",imagrUrl:"assets/web/edu.jpg",price:1500,status:"Available"}
  ]
  arrMob:Projects[]=[
    
{id:1,title:"IOS",imagrUrl:"assets/mob/1.png",price:10000,status:"Available"},
{id:2,title:"Android",imagrUrl:"assets/mob/2.jpg",price:3000,status:"Available"},
{id:3,title:"Flutter",imagrUrl:"assets/mob/3.png",price:6000,status:"Available"},
{id:4,title:"React Native",imagrUrl:"assets/mob/4.png",price:2000,status:"Available"},
{id:5,title:"Laravel",imagrUrl:"assets/mob/5.jpg",price:30000,status:"Available"}
  ]
  arrCivil:Projects[]=[
    
{id:1,title:"Civil",imagrUrl:"assets/civil/1.jpeg",price:3000,status:"Available"},
{id:2,title:"Architecture",imagrUrl:"assets/civil/2.jpg",price:4000,status:"Available"},
{id:3,title:"Networking",imagrUrl:"assets/civil/3.jpg",price:5000,status:"Available"},
{id:4,title:"Maintenance",imagrUrl:"assets/civil/4.png",price:1500,status:"Available"},
{id:5,title:"Hosting",imagrUrl:"assets/civil/5.jpg",price:1500,status:"Available"}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  changeWeb(){
    this.arrprojects=this.arrweb;
    this.ourevent.emit(this.arrprojects);
    }
    changeMob(){
    this.arrprojects=this.arrMob;
    this.ourevent.emit(this.arrprojects);
    }
    changeCivil(){
      this.arrprojects=this.arrCivil;
      this.ourevent.emit(this.arrprojects);
    
    }
}
