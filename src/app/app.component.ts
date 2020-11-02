import { Component } from '@angular/core';
import{UserDataType}from "./user-data-type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project';
  userData:UserDataType[];
  constructor(){
    
  }
  users(uData){
    this.userData=uData;
    console.log(this.userData);
  }

}
