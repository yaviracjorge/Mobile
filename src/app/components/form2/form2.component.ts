import { Component, OnInit } from '@angular/core';
import {IonCheckbox, IonInput, IonItem, IonLabel, IonList, IonText} from "@ionic/angular/standalone";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe,CommonModule} from "@angular/common";

@Component({
    selector: 'app-form2',
    templateUrl: './form2.component.html',
    styleUrls: ['./form2.component.scss'],
  imports: [
    IonInput,
    IonList,
    IonItem,
    ReactiveFormsModule,
    JsonPipe,
    CommonModule,
    IonText,
    IonCheckbox,
    IonLabel
  ]
})
export class Form2Component  implements OnInit {

  formGroup = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]+@(gmail\\.com|hotmail\\.com)$')]),
    password: new FormControl(null,[Validators.minLength(5),Validators.maxLength(10)]),
    address: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(50)]),
    credit: new FormControl(null,[Validators.min(0.01),Validators.max(100)]),
    check: new FormControl(false,[Validators.requiredTrue])
  })

  get email() { return this.formGroup.get('email'); }
  get password() { return this.formGroup.get('password'); }
  get address() { return this.formGroup.get('address'); }
  get credit() { return this.formGroup.get('credit'); }
  get check() { return this.formGroup.get('check'); }

  constructor() { }

  ngOnInit() {}

}
