import { Component, OnInit } from '@angular/core';
import { Projects } from '../components/model/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  arrprojects:Projects[]=[
   
  ];
reciveData(data:Projects[]){
  this.arrprojects=data;
}


  constructor() {

    // this.arrprojects=[]


   }

  ngOnInit(): void {
  }
  


}



// {id:1,title:"Online Shopping",imagrUrl:"assets/web/cart2.jpg",price:3000,status:"Available"},
// {id:2,title:"Medical",imagrUrl:"assets/web/med.png",price:4000,status:"Available"},
// {id:3,title:"Financial",imagrUrl:"assets/web/fin.png",price:5000,status:"Available"},
// {id:4,title:"Politics",imagrUrl:"assets/web/pol.jpg",price:1500,status:"Available"},
// {id:5,title:"Educational",imagrUrl:"assets/web/edu.jpg",price:1500,status:"Available"}