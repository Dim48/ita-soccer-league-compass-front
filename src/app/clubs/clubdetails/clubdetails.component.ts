import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'jquery';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-clubdetails',
  templateUrl: './clubdetails.component.html',
  styleUrls: ['./clubdetails.component.css']
})
export class ClubdetailsComponent {
  clubData: any;
  matchesToDisplay: any;
  showButton: boolean = false;

  constructor(private activeRoute: ActivatedRoute, private apiService: HttpService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        let clubName = params['clubName'];
        this.apiService.get('/club/' + clubName?.toString()).subscribe(
          (data) => {
            this.clubData = data;
            this.matchesToDisplay = this.clubData['matchesPlayed'].slice(0, 10);
            if (this.clubData['matchesPlayed'].length > 10) this.showButton = true;
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
    if (length >= this.clubData['matchesPlayed'].length) {
      length = this.clubData['matchesPlayed'].length;
      this.showButton = false;
    }
    this.matchesToDisplay = this.clubData['matchesPlayed'].slice(0, length);
  }
}
