import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  public isLoggedIn() { //this should be aync function returning an observable
    if (this.getData('JWT_Token')) {
      if (false) return true; //ask backend to check if token is valid instead of 'false'
    }
    return false;
  }
}
