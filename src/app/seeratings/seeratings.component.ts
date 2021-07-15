import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-seeratings',
  templateUrl: './seeratings.component.html',
  styleUrls: ['./seeratings.component.css']
})
export class SeeratingsComponent implements OnInit {
ratinglist:any[]=[]
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.getratings().subscribe(
      res=>{
        console.log(res.message)
        this.ratinglist=res.message
      },
      err=>{
        alert("something went wrong in fetching ratings")
        console.log(err)
      }

    )
  }

}
