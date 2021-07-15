import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Item} from '../models/item.model';
import {DataService} from '../data.service' ;




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

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
