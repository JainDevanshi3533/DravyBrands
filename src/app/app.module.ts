import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadingComponent } from './components/main/heading/heading.component';
import { AboutComponent } from './components/main/about/about.component';
import { PeopleComponent } from './components/main/people/people.component';
import { OfferingsComponent } from './components/main/offerings/offerings.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    HeadingComponent,
    AboutComponent,
    PeopleComponent,
    OfferingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
