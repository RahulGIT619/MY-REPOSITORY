import { Component ,Input} from '@angular/core';
import{UserDataType}from "../user-data-type";


@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'my-first-project-Login';
  @Input("login-data")loginData:UserDataType[]=[];
  userData;
  funct=false;
  username:string;
  password:string;
  loogedInUser;

  constructor(){
  }

  onLogin(username:string,password:string){
    let condition1=false,condition2=false;
    let datas=this.loginData;
    this.userData=this.loginData; 
    for(let i=0;i<this.loginData.length;i++){
        let user_name,pass;
        user_name=datas[i]["registerNo"];
        pass=datas[i]["dateOfBirth"];
        if(user_name==username){
          condition1=true;
          if(pass==password){
            this.loogedInUser=this.loginData[i];
            condition2=true;
            this.funct=true;
            
          }
        }

    }
    if(condition1==false ){
      alert("User name is not valide");
      
    }else if(condition2==false){
      alert("Enter correct password");
    }

  }

}