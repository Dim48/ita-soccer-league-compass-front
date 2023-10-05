import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css']
})
export class PlayerinfoComponent {
  data: any;

  constructor(private activeRoute: ActivatedRoute, private apiService: HttpService) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {
        let playerNameSurname = params['playerNameSurname'];
        this.apiService.get('/player/' + playerNameSurname?.toString()).subscribe(
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
