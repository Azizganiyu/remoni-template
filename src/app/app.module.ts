
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PageLayoutComponent } from './components/layouts/page-layout/page-layout.component';
import { SideNavComponent } from './components/layouts/side-nav/side-nav.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { ABOUTUSComponent } from './components/about-us/about-us.component';
import { MissionComponent } from './components/mission/mission.component';
import { WorkCarouselComponent } from './components/work-carousel/work-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { PartnersComponent } from './components/partners/partners.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageLayoutComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    BannerComponent,
    ServicesComponent,
    ABOUTUSComponent,
    MissionComponent,
    WorkCarouselComponent,
    GetStartedComponent,
    PartnersComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
