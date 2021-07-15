import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import{Observable} from 'rxjs';
import { Item } from './models/item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userLoginStatus=false;

  constructor(private hc:HttpClient) { 
    if(localStorage.getItem('username')!==null){
      this.userLoginStatus=true
    }
  }

  getItemsData():Observable<Item>{
    return this.hc.get <Item>("http://localhost:3000/items")
  }
  getItemsDataById(id):Observable<Item>{
    return this.hc.get <Item>('http://localhost:3000/items/'+id)
  }
  getTopItemsData():Observable<Item>{
    return this.hc.get <Item>("http://localhost:3000/topitems")
  }

  createNewMovie(movieObj):Observable<any>{
    return this.hc.post("http://localhost:3000/items",movieObj)
  }

  createUser(userObj):Observable<any>{
    return  this.hc.post("/user/createuser",userObj)
  }

  loginUser(credentials):Observable<any>{
    if(credentials.type==="admin"){
      return  this.hc.post("/admin/login",credentials)
    }
    if(credentials.type==="user"){
      return  this.hc.post("/user/login",credentials)
    }
   
  }

  rating(value):Observable<any>{
    return this.hc.post("/user/movierating",value)
  }

  getratings():Observable<any>{
    return this.hc.get("/user/ratings")
  }

  contactus(value):Observable<any>{
    return this.hc.post("/user/contactform" ,value)
  }

  
  
}
