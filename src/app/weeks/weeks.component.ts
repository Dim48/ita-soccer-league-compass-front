import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.css']
})
export class WeeksComponent {
  weeks: any[] = [];

  constructor(private apiService: HttpService) {}

  ngOnInit() {
    const observables = [];
  
    for (let i = 1; i <= 13; ++i) {
      observables.push(this.apiService.get(`/club/week/${i}`));
    }

    forkJoin(observables).subscribe((data) => {
      data.forEach((response, i) => {
        this.weeks[i + 1] = response;
      });
    });
  }
}
