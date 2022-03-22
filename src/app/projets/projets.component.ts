import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog } from '@angular/material/dialog';
import { SingleProjet1Component } from '../single-projet1/single-projet1.component';
import { SingleProjet2Component } from '../single-projet2/single-projet2.component';
import { SingleProjet3Component } from '../single-projet3/single-projet3.component';
import { SingleProjet4Component } from '../single-projet4/single-projet4.component';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {


  constructor(private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onCreate(){
    const dialogRef = this.dialog.open(SingleProjet1Component, {
      width: '50%',
    })
  }
  onCreate2(){
    const dialogRef = this.dialog.open(SingleProjet2Component, {
      width: '50%',
    })
  }
  onCreate3(){
    const dialogRef = this.dialog.open(SingleProjet3Component, {
      width: '50%',
    })
  }
  onCreate4(){
    const dialogRef = this.dialog.open(SingleProjet4Component, {
      width: '50%',
    })
  }
}


