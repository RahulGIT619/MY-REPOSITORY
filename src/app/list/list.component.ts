import { Component ,Input,OnInit} from '@angular/core';
import{UserDataType}from '../user-data-type'

@Component({
  selector: 'list-root',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input("get-fun") fun;
@Input("get-data") user:UserDataType;


constructor() {  
 }

  ngOnInit(): void {
  }

}