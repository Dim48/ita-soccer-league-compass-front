import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-admin-app',
  templateUrl: './admin-app.component.html',
  styleUrls: ['./admin-app.component.css']
})
export class AdminAppComponent {
  constructor (private storageService: StorageService) {}

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      //posalji serveru da proveri, ako uspe redirectuj na admin/home
    }
  }
}
