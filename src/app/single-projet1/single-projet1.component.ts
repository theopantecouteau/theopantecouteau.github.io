import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-single-projet1',
  templateUrl: './single-projet1.component.html',
  styleUrls: ['./single-projet1.component.scss']
})
export class SingleProjet1Component implements OnInit {

  constructor(public dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.closeAll();
  }

}
