import {Component, inject, OnInit} from '@angular/core';
import {IonInput, IonItem, IonList} from "@ionic/angular/standalone";
import {CountService} from "../../services/count-service";

@Component({
    selector: 'app-count2',
    templateUrl: './count2.component.html',
    styleUrls: ['./count2.component.scss'],
    imports: [
        IonInput,
        IonItem,
        IonList
    ]
})
export class Count2Component  implements OnInit {

  counterService = inject(CountService)
  constructor() { }

  ngOnInit() {}

}
