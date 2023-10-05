import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-matchpage',
  templateUrl: './matchpage.component.html',
  styleUrls: ['./matchpage.component.css']
})
export class MatchpageComponent {
  data: any;

  constructor(private activeRoute: ActivatedRoute, private apiService: HttpService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        let matchName = params['matchName'];
        this.apiService.get('/match/' + matchName?.toString()).subscribe(
          (data) => {
            this.data = data;
          },
          (error) => {
            if (error.status === 404) console.log("404 Not Found error")
            else console.log('Other error:', error);
          }
        );
      }
    );
  }
}
