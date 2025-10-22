import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {EqualPasswordValidator, SearchValidator} from "../../../utils/validators";
import {IonInput, IonItem, IonLabel, IonList} from "@ionic/angular/standalone";

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    ReactiveFormsModule
  ]
})
export class Form3Component  implements OnInit {

  formBuilder = inject(FormBuilder)
  form = this.formBuilder.group({
    email: ['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9_]+@(gmail|hotmail)\\.(com|es)$')]],
    password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10),Validators.pattern('^[a-z0-9]+[-_*@./+]$'),SearchValidator.validatorPassword]],
    confirmPassword: ['',[Validators.required]],
  },{
    validators:[EqualPasswordValidator.validatorPassword('password','confirmPassword')]
  })

  get email() { return this.form.controls['email']; }
  get password() { return this.form.controls['password']; }
  get confirmPassword() { return this.form.controls['confirmPassword']; }
  constructor() { }

  ngOnInit() {}

}
