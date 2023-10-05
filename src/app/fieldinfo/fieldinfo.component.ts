import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-fieldinfo',
  templateUrl: './fieldinfo.component.html',
  styleUrls: ['./fieldinfo.component.css']
})
export class FieldinfoComponent {
  data: any;
  matchesToDisplay: any;
  showButton: boolean = false;
  name: string;

  constructor(private activeRoute: ActivatedRoute, private apiService: HttpService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        this.name = params['fieldName'];
        this.apiService.get('/field/' + this.name?.toString()).subscribe(
          (data) => {
            this.data = data;
            this.matchesToDisplay = this.data.slice(0, 10);
            if (this.data.length > 10) this.showButton = true;
          },
          (error) => {
            if (error.status === 404) console.log("404 Not Found error")
            else console.log('Other error:', error);
          }
        );
      }
    );
  }

  loadMore() {
    let length = this.matchesToDisplay.length + 10;
    if (length >= this.data.length) {
      length = this.data.length;
      this.showButton = false;
    }
    this.matchesToDisplay = this.data.slice(0, length);
  }
}
