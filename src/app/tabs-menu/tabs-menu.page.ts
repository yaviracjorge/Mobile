import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonMenu,
  IonMenuButton, IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tabs-menu',
  templateUrl: './tabs-menu.page.html',
  styleUrls: ['./tabs-menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonMenu, IonMenuButton, RouterLink, IonTab, IonTabBar, IonTabButton, IonTabs, IonRouterOutlet, IonIcon, IonLabel, IonList, IonItem]
})
export class TabsMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
