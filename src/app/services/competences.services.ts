import { getInterpolationArgsLength } from "@angular/compiler/src/render3/view/util";
import { Injectable } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Competences } from "../models/competences.models";

@Injectable({
    providedIn: 'root'
})
export class CompetencesServices{
    competences: Competences[] = [  
        {
          id: 4,
          title :'HTML/CSS',
          pour : 85
        },
        {
          id:2,
          title : 'PHP',
          pour : 85
        },
        {
          id:7,
          title : 'UML',
          pour : 80
        },
        {
          id: 3,
          title : 'PLSQL/SQL',
          pour : 75
        },
        {
          id: 1,
          title :'Java',
          pour : 70 
        },
        {
          id:6,
          title : 'XML',
          pour : 70
        },
        {
          id:6,
          title : 'C',
          pour : 70
        },
        {
          id:5,
          title : 'JavaScript',
          pour : 60
        },
        {
          id:5,
          title : 'Angular',
          pour : 40
        }
    ];

    competencesNonInfo : Competences[] = [
      {
        id:5,
        title : 'Gestion de projet',
        pour : 80
      },
      {
        id:5,
        title : 'Méthode Agile',
        pour : 75
      },
      {
        id:5,
        title : 'Comptabilité',
        pour : 70
      },
      {
        id:5,
        title : 'Mathématiques',
        pour : 70
      },
      {
        id:5,
        title : 'Mathématiques',
        pour : 70
      },
      {
        id:5,
        title : 'Mathématiques',
        pour : 70
      },
      {
        id:5,
        title : 'Mathématiques',
        pour : 70
      },
      {
        id:5,
        title : 'Mathématiques',
        pour : 70
      }
    ];

    getAllCompetences(): Competences[]{
        return this.competences;
    }

    getAllCompetencesNonInfo(): Competences[]{
      return this.competencesNonInfo;
    }


    

}