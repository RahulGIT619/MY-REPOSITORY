import { Component, OnInit, Input } from '@angular/core';
import {TableContent} from '../table-content';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})
export class TableDetailComponent implements OnInit {
  @Input() tabData:TableContent;
  
  constructor() { }

  ngOnInit(): void {
  }

}
