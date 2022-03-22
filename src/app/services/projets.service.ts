import { Injectable } from "@angular/core";
import { Projet } from "../models/projet.model";

@Injectable({
    providedIn: 'root'
})
export class ProjetsService{
    projetsList: Projet[] = [
        {
            id : 1,
            title : "php",
            description : "site eCommerce ",
            subdescription : "php et HTML/CSS"
        },
        {
            id : 2,
            title : "Android",
            description : "Application Météorologique",
            subdescription : "Java et XML"
        },
        {
            id : 3,
            title : "Analyse",
            description : "Modélisation de Discord",
            subdescription : "UML"
        },
        {
            id : 4,
            title : "Conception",
            description : "Digitalisation d'une entreprise fictive",
            subdescription : "UML"
        }
    ];

    getAllProjets(): Projet[]{
        return this.projetsList;
    }

    getProjetsById(id :number) : Projet {
        const projet = this.projetsList.find(i => i.id ===id);
        if (!projet){
            throw new Error('N existe pas');
        }
        else{
            return projet;
        }
    }

    getLength(): number {
        return this.projetsList.length;
    }
}