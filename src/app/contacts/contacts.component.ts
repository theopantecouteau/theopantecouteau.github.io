import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent   {
  contact = new FormGroup({
      name : new FormControl(),
      prenom :  new FormControl(),
      mail : new FormControl(),
      objet : new FormControl(),
      message: new FormControl()

      

  });
}
