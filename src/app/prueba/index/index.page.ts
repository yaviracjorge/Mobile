import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonList, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Count1Component} from "../../components/count1/count1.component";
import { addIcons } from 'ionicons';
import {chevronDownOutline, chevronUpOutline} from "ionicons/icons";

import {Count2Component} from "../../components/count2/count2.component";
import {CountService} from "../../services/count-service";

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, Count1Component, IonIcon, IonList, IonButton, Count2Component]
})
export class IndexPage implements OnInit {
  countService = inject(CountService);


  constructor() {
    addIcons({chevronUpOutline,chevronDownOutline})
  }

  ngOnInit() {
  }

}
