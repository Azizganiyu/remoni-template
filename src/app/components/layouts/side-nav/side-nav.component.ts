import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  toggleNav : boolean = false

  constructor(
    private navigation: NavigationService,
    private route : ScrollService
  ) { }

  ngOnInit(): void {

    this.navigation.open.subscribe((value) => {
      this.toggleNav = value;
    })
  }

  closeToggles(){
    this.navigation.toggle(false)
  }

  scroll(to){
    this.route.route(to)
  }

}
