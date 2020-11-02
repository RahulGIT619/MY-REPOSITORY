import { Component,Input} from '@angular/core';
import{UserDataType} from '../user-data-type'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input("table-data") users:UserDataType[]=[];

     user:UserDataType;
}
