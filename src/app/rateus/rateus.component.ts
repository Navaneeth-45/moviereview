import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rateus',
  templateUrl: './rateus.component.html',
  styleUrls: ['./rateus.component.css']
})
export class RateusComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  onsubmit(value){
    this.ds.rating(value).subscribe(
      res=>{
        if(res.message==="rating is successfull"){
          alert("thanks for rating us")
        }
        else{
          alert("you already rated us")
        }
        
      },
      err=>{
        console.log(err)
        alert("Something went wrong in login")
      }
    )
  }

}
