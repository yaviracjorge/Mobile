import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {chevronDownOutline, chevronUpOutline} from "ionicons/icons";
import {CountService} from "../../services/count-service";
import {Form2Component} from "../../components/form2/form2.component";
import {Form1Component} from "../../components/form1/form1.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon, IonList, IonButton, Form2Component, Form1Component, IonItem]
})
export class IndexPage implements OnInit {
  countService = inject(CountService);


  constructor() {
    addIcons({chevronUpOutline,chevronDownOutline})
  }

  ngOnInit() {
  }

}
