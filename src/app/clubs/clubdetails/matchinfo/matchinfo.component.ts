import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css']
})
export class MatchinfoComponent {
  @Input() matchesToDisplay: any;
}
