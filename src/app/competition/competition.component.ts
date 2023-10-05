import { Component } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent {
  currentYear:number;

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
