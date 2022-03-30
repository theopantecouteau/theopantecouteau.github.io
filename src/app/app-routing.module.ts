import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CompetencesComponent } from './competences/competences.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FuturComponent } from './futur/futur.component';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProposComponent } from './propos/propos.component';

const routes: Routes = [
  {path: 'competences', component: CompetencesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'projets', component: ProjetsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'propos', component: ProposComponent},
  {path: 'futur', component: FuturComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}