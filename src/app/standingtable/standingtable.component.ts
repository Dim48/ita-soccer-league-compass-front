import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-standingtable',
  templateUrl: './standingtable.component.html',
  styleUrls: ['./standingtable.component.css']
})
export class StandingtableComponent {
  tableData: any;
  
  constructor(private apiService: HttpService) {}

  ngOnInit() {
    if (this.apiService.isTableDataCached()) this.tableData = this.apiService.getTableData();
    else this.apiService.getTableObservable().subscribe((data: any) => {
      this.tableData = data;
    });
  }
}
