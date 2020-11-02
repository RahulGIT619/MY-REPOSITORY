import { Component,EventEmitter,Output } from '@angular/core';
import{UserDataType}from "../user-data-type";

@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  title = 'my-first-project-Register';
  @Output("send-data") usersData=new EventEmitter();
  user:UserDataType={registerNo:null,firstName:"",lastName:"",dateOfBirth:"",mark1:null,mark2:null,mark3:null};
  users:UserDataType[]=[];
  onSubmit(data:UserDataType){
    let copydata=Object.assign({},data);
    this.users.push(copydata);
    this.usersData.emit(this.users);
  }
  
}