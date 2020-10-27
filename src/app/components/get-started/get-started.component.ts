import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  constructor(
    private route : ScrollService
  ) { }

  ngOnInit(): void {
  }

  contactUs(){
    this.route.route('footer')
  }

}
