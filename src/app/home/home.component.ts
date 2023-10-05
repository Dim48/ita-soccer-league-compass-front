import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  matches: any;
  week: any;

  constructor(private apiService: HttpService) {}

  ngOnInit() {
    this.apiService.get('/match/upcoming').subscribe((data) => {
      this.matches = data;
    });

    this.apiService.get('/club/week/13').subscribe((data) => {
      this.week = data;
    });
  }
}
