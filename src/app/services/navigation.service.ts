import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  open : EventEmitter<boolean>;


  constructor(
  ) {
    this.open = new EventEmitter<boolean>()
  }

  toggle(value){
    this.open.emit(value)
  }

}
