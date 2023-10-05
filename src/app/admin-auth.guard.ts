import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { StorageService } from './services/storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public storageService: StorageService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
     return this.storageService.isLoggedIn();
  }
}