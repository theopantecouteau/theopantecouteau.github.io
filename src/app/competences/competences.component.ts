import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competences } from '../models/competences.models';
import { CompetencesServices } from '../services/competences.services';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent implements OnInit {

  @Input() competences!: Competences;
  @Input() competencesNonInfo !: Competences;



  constructor(private competencesServices : CompetencesServices, private route: Router) { }

  ngOnInit(): void {
      
    }
      
  

}
