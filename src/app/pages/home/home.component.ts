import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild ('home', {static:false}) home: ElementRef;
  @ViewChild ('services', {static:false}) services: ElementRef;
  @ViewChild ('about', {static:false}) about: ElementRef;
  @ViewChild ('mission', {static:false}) mission: ElementRef;
  @ViewChild ('clients', {static:false}) clients: ElementRef;
  @ViewChild ('campaigns', {static:false}) campaigns: ElementRef;
  @ViewChild ('partners', {static:false}) partners: ElementRef;

  constructor(private route: ScrollService) { }

  ngOnInit(): void {
    this.route.routeTo.subscribe((section) => {
      if(section === 'home'){
        this.home.nativeElement.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"});
      }
      if(section === 'services'){
        this.services.nativeElement.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"});
      }
      if(section === 'about'){
        this.about.nativeElement.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"});
      }
      if(section === 'mission'){
        this.mission.nativeElement.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"});
      }
      if(section === 'clients'){
        this.clients.nativeElement.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"});
      }
      if(section === 'campaigns'){
        this.campaigns.nativeElement.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"});
      }
      if(section === 'partners'){
        this.partners.nativeElement.scrollIntoView({behavior: 'smooth', block: "center", inline: "nearest"});
      }
    })
  }

  @HostListener('window:scroll', [ ]) intersect(){
    let homebounding = this.home.nativeElement.getBoundingClientRect()
    let servicesbounding = this.services.nativeElement.getBoundingClientRect()
    let aboutbounding = this.about.nativeElement.getBoundingClientRect()
    let missionbounding = this.mission.nativeElement.getBoundingClientRect()
    let clientsbounding = this.clients.nativeElement.getBoundingClientRect()
    let campaignsbounding = this.campaigns.nativeElement.getBoundingClientRect()
    let partnersbounding = this.partners.nativeElement.getBoundingClientRect()
    //console.log(bounding)
    if (homebounding.y < 40 && homebounding.y > -40) {
      this.route.changeActiveLink('home')
    }
    if (servicesbounding.y < 40 && servicesbounding.y > -40) {
      this.route.changeActiveLink('services')
    }
    if (aboutbounding.y < 40 && aboutbounding.y > -40) {
      this.route.changeActiveLink('about')
    }
    if (missionbounding.y < 40 && missionbounding.y > -40) {
      this.route.changeActiveLink('mission')
    }
    if (clientsbounding.y < 40 && clientsbounding.y > -40) {
      this.route.changeActiveLink('clients')
    }
    if (partnersbounding.y < 40 && partnersbounding.y > -40) {
      this.route.changeActiveLink('partners')
    }
    if (campaignsbounding.y < 40 && campaignsbounding.y > -40) {
      this.route.changeActiveLink('campaigns')
    }
  }


}
