import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CompetencesListComponent } from './competences-list/competences-list.component';
import { CompetencesComponent } from './competences/competences.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'competences', component: CompetencesListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}