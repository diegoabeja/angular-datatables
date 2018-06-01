import { Component, OnInit } from '@angular/core';
import { UrlDataService } from '../url-data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  title = 'app';
  allStatus: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private urlDataService: UrlDataService) {

  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      lengthMenu: [[50, 100, 1000], [50, 100, 1000]]
    };

    this.urlDataService.getUrlData().subscribe(data => {
      this.allStatus = data;
      this.dtTrigger.next();
    })
  }
}
