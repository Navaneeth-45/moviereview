import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private ds:DataService , private router:Router) { }

  ngOnInit(): void {
  }

  contactform(value){
    this.ds.contactus(value).subscribe(
      res=>{
        if(res.message==="your query successfully submitted"){
          alert("your query will be evaluated")
        }
      },
      err=>{
        console.log(err)
        alert("Something went wrong ")
      }
    )

    this.router.navigateByUrl("home")
  }

  

}
