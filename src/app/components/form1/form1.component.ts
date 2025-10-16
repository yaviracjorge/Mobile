import { Component, OnInit } from '@angular/core';
import {IonCheckbox, IonInput, IonItem, IonLabel, IonRadio, IonRadioGroup} from "@ionic/angular/standalone";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss'],
  imports: [
    IonInput,
    ReactiveFormsModule,
    IonRadioGroup,
    IonRadio,
    IonCheckbox,
    IonLabel,
    IonItem
  ]
})
export class Form1Component  implements OnInit {

  name= new FormControl(null,[Validators.maxLength(25),Validators.minLength(10)]);
  age = new FormControl(null,[Validators.max(75),Validators.min(18)]);
  email = new FormControl(null,[Validators.email,Validators.required]);
  password = new FormControl(null,[Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9]).*$'),Validators.required]);
  check = new FormControl( false, [Validators.requiredTrue])

  constructor() { }

  ngOnInit() {}

}
