import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor(
    private route : ScrollService
  ) { }

  ngOnInit(): void {
  }

  contactUs(){
    this.route.route('footer')
  }

}
