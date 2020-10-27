import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  routeTo : EventEmitter<string>
  activeLink : EventEmitter<string>

  constructor() {
    this.routeTo = new EventEmitter<string>()
    this.activeLink = new EventEmitter<string>()
  }

  route(to){
    this.routeTo.emit(to);
  }

  changeActiveLink(active){
    this.activeLink.emit(active);
  }
}
