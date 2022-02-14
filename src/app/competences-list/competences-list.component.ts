import { Component, OnInit } from '@angular/core';
import { Competences } from '../models/competences.models';
import { CompetencesServices } from '../services/competences.services';

@Component({
  selector: 'app-competences-list',
  templateUrl: './competences-list.component.html',
  styleUrls: ['./competences-list.component.scss']
})
export class CompetencesListComponent implements OnInit {

  competences !: Competences[];
  competencesNonInfo !: Competences[];


  constructor(private competencesServices : CompetencesServices) { }

  ngOnInit(): void {
    this.competences = this.competencesServices.getAllCompetences();
    this.competencesNonInfo = this.competencesServices.getAllCompetencesNonInfo();
  }

}
