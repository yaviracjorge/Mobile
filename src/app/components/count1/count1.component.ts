import {Component, inject, OnInit} from '@angular/core';
import {IonButton, IonIcon, IonInput, IonItem, IonList} from "@ionic/angular/standalone";
import {CountService} from "../../services/count-service";


@Component({
  selector: 'app-count1',
  templateUrl: './count1.component.html',
  styleUrls: ['./count1.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonInput,
  ]
})
export class Count1Component  implements OnInit {
  counterService = inject(CountService);

  constructor() {

  }

  ngOnInit() {}

}
