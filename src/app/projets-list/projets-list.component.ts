import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../services/projets.service';
import { Projet } from '../models/projet.model';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.scss']
})
export class ProjetsListComponent implements OnInit {

  projets !: Projet[];

  constructor(private projetService : ProjetsService) { }

  ngOnInit(): void {
    this.projets = this.projetService.getAllProjets();
  }

}
