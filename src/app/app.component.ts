import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendproject1';
  constructor(public ds:DataService){}

  userLogout(){
    localStorage.clear();
    this.ds.userLoginStatus=false;
  }
}
