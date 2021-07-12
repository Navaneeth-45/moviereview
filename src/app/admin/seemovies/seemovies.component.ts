import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Item} from 'src/app/models/item.model';
import {DataService} from 'src/app/data.service' ;

@Component({
  selector: 'app-seemovies',
  templateUrl: './seemovies.component.html',
  styleUrls: ['./seemovies.component.css']
})
export class SeemoviesComponent implements OnInit {

  // for search pipe
  searchTerm:string;
  p=1;
 // for rating
  starRating = 0;

 myData:Item;
 constructor(private itemObj:DataService , private router:Router) { }

 ngOnInit(): void {

   this.itemObj.getItemsData().subscribe(
     items=>{
       this.myData=items;
     },
     err=>{
       console.log("error is ",err)
     }

   )


 }
 
 onSelectId(id){
   this.router.navigateByUrl('movies/'+id)

 
 }

}
