import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.css']
})
export class AddmoviesComponent implements OnInit {

  constructor(private dsObj:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  movie=new Item('','','','','','','','','','','');
  

  onSubmitNewMobile(){
    
    
      this.dsObj.createNewMovie(this.movie).subscribe(
        res=>{
          //navigate to viewmobiles component
          alert("movie added")
          this.router.navigateByUrl("admin/seemovies")


        },
        err=>{
          console.log('err in creating new mobile',err)
        }
      )
  }

}
