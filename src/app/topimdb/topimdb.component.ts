import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Item} from '../models/item.model';
import {DataService} from '../data.service' ;

@Component({
  selector: 'app-topimdb',
  templateUrl: './topimdb.component.html',
  styleUrls: ['./topimdb.component.css']
})
export class TopimdbComponent implements OnInit {
// for search pipe
searchTerm:string;


myData:Item;
constructor(private itemObj:DataService , private router:Router) { }

ngOnInit(): void {

  this.itemObj.getTopItemsData().subscribe(
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
