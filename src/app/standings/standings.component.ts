import { Component, Input } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent {
  tableData: any;
  currentYear: number;
  @Input() showHeader:boolean = true;
  
  constructor(private apiService: HttpService) {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear();

    if (this.apiService.isTableDataCached()) this.tableData = this.apiService.getTableData();
    else this.apiService.getTableObservable().subscribe((data: any) => {
      this.tableData = data;
    });
  }
}
