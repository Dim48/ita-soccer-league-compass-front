import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent {
  clubs: any = [];

  constructor(private apiService: HttpService) {}

  ngOnInit() {
    this.apiService.get('/club').subscribe((data) => {
      this.clubs = data;
    });
  }
}
