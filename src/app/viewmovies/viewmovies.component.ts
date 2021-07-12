import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Item} from '../models/item.model';
import {DataService} from '../data.service' ;

@Component({
  selector: 'app-viewmovies',
  templateUrl: './viewmovies.component.html',
  styleUrls: ['./viewmovies.component.css']
})
export class ViewmoviesComponent implements OnInit {

  myData:Item;
  constructor(private itemObj:DataService , private ar:ActivatedRoute) { }

  ngOnInit(): void {
 
    let id=this.ar.snapshot.params.id;
    this.itemObj.getItemsDataById(id).subscribe(
      items=>{
        this.myData=items;
      },
      err=>{
        console.log("error is ",err)
      }

    )

  }
  
 

}


