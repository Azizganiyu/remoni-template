import { Component, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { fromEvent, Observable,Subscription } from "rxjs";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleNavStatus : boolean = false
  fixedHeader : boolean = false
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  activeLink : string = 'home';


  constructor(
    private navigation: NavigationService,
    @Inject(PLATFORM_ID) private platformId: any,
    private route : ScrollService
  ) {

    this.navigation.open.subscribe((value) => {
      this.toggleNavStatus = value;
      if(value = true){
        this.fixedHeader = true
      }
      else{
        this.fixedHeader = false
      }
    })

  }

  ngOnInit(): void {

    this.route.activeLink.subscribe((link) => {
      this.activeLink = link
    })

    if (isPlatformBrowser(this.platformId)) {
      this.resizeObservable$ = fromEvent(window, 'resize')
      this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.closeToggles()
      })
    }

  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    this.closeToggles()

     if(window.scrollY > 200){
       this.fixedHeader = true
     }
     else{
       this.fixedHeader = false
     }

  }


  toggleNav(){
    this.toggleNavStatus = !this.toggleNavStatus
    this.navigation.toggle(this.toggleNavStatus)
  }


  closeToggles(){
    this.toggleNavStatus = false
  }

  scroll(to){
    this.route.route(to)
    this.activeLink = to
  }

}
