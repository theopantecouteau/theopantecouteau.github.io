import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompetencesComponent } from './competences/competences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, NgSelectOption} from '@angular/forms';
import { NgParticlesModule } from 'ng-particles';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProjetsListComponent } from './projets-list/projets-list.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProposComponent } from './propos/propos.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SingleProjet1Component } from './single-projet1/single-projet1.component';
import { SingleProjet2Component } from './single-projet2/single-projet2.component';
import { SingleProjet3Component } from './single-projet3/single-projet3.component';
import { SingleProjet4Component } from './single-projet4/single-projet4.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompetencesComponent,
    ContactsComponent,
    ProjetsComponent,
    ProjetsListComponent,
    ProposComponent,
    SingleProjet1Component,
    SingleProjet2Component,
    SingleProjet3Component,
    SingleProjet4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    NgParticlesModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    IvyCarouselModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
