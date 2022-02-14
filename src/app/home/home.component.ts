import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HoverEvent } from 'tsparticles/Options/Classes/Interactivity/Events/HoverEvent';

declare let Typewriter: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    const h1 = document.querySelector('h1');
    new Typewriter(h1, {
      deleteSpeed: 10
    })
    .changeDelay(40)
    .typeString('Bienvenue sur mon <strong>site web !</strong>')
    .pauseFor(3000)
    .deleteChars(10)
    .typeString('<strong>e-portfolio</strong ! ')
    .pauseFor(1000)
    .start();

  }

}
