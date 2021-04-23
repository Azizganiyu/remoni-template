import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { fromEvent, Observable,Subscription } from "rxjs";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleNavStatus : boolean = false
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription


  constructor(
    private navigation: NavigationService,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {

    this.navigation.open.subscribe((value) => {
      this.toggleNavStatus = value;
    })

  }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      this.resizeObservable$ = fromEvent(window, 'resize')
      this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.closeToggles()
      })
    }

  }


  toggleNav(){
    this.toggleNavStatus = !this.toggleNavStatus
    this.navigation.toggle(this.toggleNavStatus)
  }


  closeToggles(){
    this.toggleNavStatus = false
    this.navigation.toggle(false)
  }

}
